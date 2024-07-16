import {
    KeyboardEventHandler,
    RefCallback,
    HTMLAttributes,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    MutableRefObject,
} from 'react';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ENTER, ESCAPE, SPACE, TAB } from '../constants/keys';
import adjustDropdownScroll from '../helpers/adjust-dropdown-scroll';
import useOnClickOutside from './use-on-click-outside';
import useRefMap from './use-ref-map';
import useDropdownState from './use-dropdown-state';
import useElementsIds from './use-elements-ids';
import useScrollOnOpen from './use-scroll-on-open';

type DivRef = HTMLDivElement | null;

type ValueItem = string | number;

type VoidFunction = () => void;

export interface RawEmptyOptionData {
    empty: true;
}

export interface RawNotEmptyOptionData {
    empty: false;
    active: boolean;
    changeValue: VoidFunction;
}

type RawOptionsData<E extends RawEmptyOptionData, N extends RawNotEmptyOptionData> = (E | N)[];

interface Config<V extends ValueItem, E extends RawEmptyOptionData, N extends RawNotEmptyOptionData> {
    value: V[];
    onChange: (newValue: V[]) => void;
    onSubmit?: VoidFunction;
    rawOptionsData: RawOptionsData<E, N>;
    optionsGap: number;
    pickerLabel: string;
    multiple: boolean;
    navigationOrientation?: 'horizontal' | 'vertical' | 'both';
    horizontalNavigationStep?: number;
    verticalNavigationStep?: number;
}

interface PreparedCommonProps extends Pick<HTMLAttributes<HTMLElement>, 'role' | 'aria-selected'> {
    onKeyboardClick: VoidFunction;
    onClick: VoidFunction;
    id: string;
    ref: RefCallback<HTMLElement>;
    highlighted: boolean;
}

interface PreparedEmptyOptionData extends RawEmptyOptionData, PreparedCommonProps {}

interface PreparedNotEmptyOptionData extends RawNotEmptyOptionData, PreparedCommonProps {}

// данные для внутреннего пользования (внутри хука)
type PreparedOptionData<E extends RawEmptyOptionData, N extends RawNotEmptyOptionData> =
    | (E & PreparedEmptyOptionData)
    | (N & PreparedNotEmptyOptionData);

type PreparedOptionsData<E extends RawEmptyOptionData, N extends RawNotEmptyOptionData> = PreparedOptionData<E, N>[];

// данные для внешнего пользования (за пределами хука - в компонентах, его использующих)
type PreparedOptionDataForUI<E extends RawEmptyOptionData, N extends RawNotEmptyOptionData> =
    | (E & Omit<PreparedEmptyOptionData, 'onKeyboardClick'>)
    | Omit<N & PreparedNotEmptyOptionData, 'changeValue' | 'onKeyboardClick'>;

type PreparedOptionsDataForUI<E extends RawEmptyOptionData, N extends RawNotEmptyOptionData> = PreparedOptionDataForUI<
    E,
    N
>[];

interface PickerProps
    extends Pick<
        HTMLAttributes<HTMLElement>,
        'role' | 'aria-controls' | 'aria-expanded' | 'aria-haspopup' | 'aria-label' | 'style'
    > {
    ref: MutableRefObject<HTMLDivElement | null>;
    onSubmit?: VoidFunction;
    onKeyDown: KeyboardEventHandler;
}

interface SelectBoxProps {
    active: boolean;
    onClick: VoidFunction;
}

interface DropdownProps
    extends Pick<
        HTMLAttributes<HTMLElement>,
        'role' | 'aria-multiselectable' | 'aria-activedescendant' | 'aria-orientation'
    > {
    ref: MutableRefObject<HTMLDivElement | null>;
    id: string;
    tabIndex: number;
    visible: boolean;
    popover: 'auto' | 'manual';
}

interface CustomSelectData<E extends RawEmptyOptionData, N extends RawNotEmptyOptionData> {
    pickerProps: PickerProps;
    selectBoxProps: SelectBoxProps;
    dropdownProps: DropdownProps;
    optionsData: PreparedOptionsDataForUI<E, N>;
}

const useCustomSelectData = <V extends ValueItem, E extends RawEmptyOptionData, N extends RawNotEmptyOptionData>({
    value,
    onChange,
    onSubmit,
    optionsGap,
    rawOptionsData,
    pickerLabel,
    multiple,
    navigationOrientation = 'vertical',
    horizontalNavigationStep = 1,
    verticalNavigationStep = 1,
}: Config<V, E, N>): CustomSelectData<E, N> => {
    const pickerRef = useRef<HTMLDivElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [optionsMap, collector] = useRefMap<HTMLElement>();

    const { dropdownId, getOptionId } = useElementsIds();

    const {
        isOpen,
        openDropdown,
        closeDropdown,
        keyboardFocusIndex,
        setKeyboardFocusIndex,
        mouseFocusIndex,
        setMouseFocusIndex,
    } = useDropdownState();

    const closeOnOutsideClick = () => {
        if (isOpen) {
            closeDropdown();
        }
    };

    const outsideElementRef = useOnClickOutside(closeOnOutsideClick);

    useImperativeHandle<DivRef, DivRef>(outsideElementRef, () => pickerRef.current);

    const getCurrentIndex = (): number => {
        return mouseFocusIndex || keyboardFocusIndex || 0;
    };

    const clearValuesAndClosePicker = () => {
        onChange([]);
        closeDropdown();
    };

    const optionsData: PreparedOptionsData<E, N> = rawOptionsData.map((item, index) => {
        return {
            ...item,
            id: getOptionId(index),
            highlighted: keyboardFocusIndex === index,
            onKeyboardClick: item.empty
                ? clearValuesAndClosePicker
                : () => {
                      item.changeValue();
                      if (!multiple) {
                          closeDropdown();
                      }
                  },
            onClick: item.empty
                ? clearValuesAndClosePicker
                : () => {
                      setMouseFocusIndex(index);
                      item.changeValue();
                      if (!multiple) {
                          closeDropdown();
                      }
                  },
            ref: (ref) => {
                if (collector) {
                    collector(index, ref);
                }
            },
            role: item.empty ? 'button' : 'option',
            ...(item.empty ? {} : { 'aria-selected': item.active }),
        };
    });

    const getInitialIndexOnOpen = (): number => {
        if (value.length === 0) {
            return 0;
        }

        // выбираем самую высокую в списке выбранную опцию
        const index = optionsData.findIndex((option) => !option.empty && option.active);

        return index === -1 ? 0 : index;
    };

    const openDropdownAndHighlightInitial = () => {
        openDropdown();
        setKeyboardFocusIndex(getInitialIndexOnOpen());
    };

    const scrollToIndex = (index: number) => {
        const option = optionsMap.current[index];
        if (option && dropdownRef.current) {
            adjustDropdownScroll(dropdownRef.current, option, optionsGap);
            setKeyboardFocusIndex(index);
        }
    };

    const goDown = (step: number) => {
        const prevIndex = getCurrentIndex();
        const newIndex = prevIndex === 0 ? 1 : prevIndex + step;

        if (newIndex <= optionsData.length - 1) {
            scrollToIndex(newIndex);
        }
    };

    const goUp = (step: number) => {
        const prevIndex = getCurrentIndex();
        let newIndex = prevIndex - step;

        if (newIndex < 0) {
            newIndex = 0;
        }

        scrollToIndex(newIndex);
    };

    const callCurrentOptionOnKeyboardClick = () => {
        const index = getCurrentIndex();
        const option = optionsData[index];

        if (option) {
            option.onKeyboardClick();
            setKeyboardFocusIndex(index);
        }
    };

    const onPickerKeyDown: KeyboardEventHandler = (event) => {
        switch (event.keyCode) {
            case SPACE: {
                event.preventDefault();
                if (!isOpen) {
                    openDropdownAndHighlightInitial();
                } else {
                    callCurrentOptionOnKeyboardClick();
                }
                break;
            }
            case ARROW_DOWN: {
                if (navigationOrientation === 'horizontal') return;

                event.preventDefault();
                if (isOpen) {
                    goDown(verticalNavigationStep);
                } else {
                    openDropdownAndHighlightInitial();
                }
                break;
            }
            case ARROW_UP: {
                if (navigationOrientation === 'horizontal') return;

                event.preventDefault();
                if (isOpen) {
                    goUp(verticalNavigationStep);
                } else {
                    openDropdownAndHighlightInitial();
                }
                break;
            }
            case ARROW_RIGHT: {
                if (navigationOrientation === 'vertical') return;

                event.preventDefault();
                if (isOpen) {
                    goDown(horizontalNavigationStep);
                }
                break;
            }
            case ARROW_LEFT: {
                if (navigationOrientation === 'vertical') return;

                event.preventDefault();
                if (isOpen) {
                    goUp(horizontalNavigationStep);
                }
                break;
            }
            case ENTER: {
                event.preventDefault();
                if (isOpen) {
                    callCurrentOptionOnKeyboardClick();
                } else if (onSubmit) {
                    onSubmit();
                }
                break;
            }
            case ESCAPE:
            case TAB:
                if (isOpen) {
                    event.preventDefault();
                    closeDropdown();
                }
                break;
            default:
        }
    };

    const onSelectBoxClick = () => {
        if (isOpen) {
            closeDropdown();
        } else {
            setMouseFocusIndex(getInitialIndexOnOpen());
            openDropdown();
        }
    };

    useScrollOnOpen({
        isOpen,
        getIndexToScroll: getInitialIndexOnOpen,
        dropdown: dropdownRef.current,
        optionsMapRef: optionsMap,
        optionsGap,
    });

    // useLayoutEffect(() => {
    //     if (isOpen) {
    //         dropdownRef.current?.focus({ preventScroll: true });
    //     }
    // }, [isOpen]);

    // TODO вероятно, с ипользованием поповера, нам в хуке не нужны хуки для оутсайд клика
    useLayoutEffect(() => {
        if (isOpen) {
            dropdownRef.current?.showPopover();
        } else {
            dropdownRef.current?.hidePopover();
        }
    }, [isOpen]);

    const anchorName = `--${dropdownId}-an`;

    return {
        pickerProps: {
            ref: pickerRef,
            onSubmit,
            onKeyDown: onPickerKeyDown,
            role: 'combobox',
            'aria-controls': dropdownId,
            'aria-expanded': isOpen,
            'aria-haspopup': 'listbox',
            'aria-label': pickerLabel,
            style: {
                '--anchor-name': anchorName,
            },
        },
        selectBoxProps: {
            active: isOpen,
            onClick: onSelectBoxClick,
        },
        dropdownProps: {
            ref: dropdownRef,
            id: dropdownId,
            tabIndex: -1,
            role: 'listbox',
            'aria-multiselectable': multiple,
            'aria-orientation': navigationOrientation === 'vertical' ? 'vertical' : 'horizontal',
            'aria-activedescendant': isOpen ? getOptionId(getCurrentIndex()) : '',
            visible: isOpen,
            popover: 'manual',
        },
        optionsData: optionsData.map((item) => {
            const itemForUI = {
                ...item,
                onKeyboardClick: undefined,
                changeValue: undefined,
            };
            delete itemForUI.onKeyboardClick;
            delete itemForUI.changeValue;

            return itemForUI;
        }),
    };
};

export default useCustomSelectData;
