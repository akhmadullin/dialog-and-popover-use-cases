import { useCallback, useState } from 'react';

/**
 * Отдельные индексы (keyboardFocusIndex и mouseFocusIndex)
 * позволяют синхронизировать фокус на поочередные действия с контролом через мышь и клаву,
 * и в то же время показывать нужные стили для этих состояний.
 * Стили на ховер (мышь) и на highlighted (клава) могут отличаться.
 *
 * Индекс mouseFocusIndex нам нужен, в основном, для дропдаунов с мультиселектом
 * (там, где мы можем выбрать несколько опций за раз).
 *
 * Там, где мультиселекта нет, сихнронизировать фокус клавы и мыши обычно не нужно,
 * так как мы сразу на выбор option'а закрываем дропдаун.
 */
interface State {
    isOpen: boolean;
    keyboardFocusIndex: number | null; // индекс активного элемента - переход на него осуществлен клавиатурой
    mouseFocusIndex: number | null; // индекс активного элемента - переход на него осуществлен мышью
}

export interface UseDropdownState extends State {
    closeDropdown: () => void;
    openDropdown: () => void;
    setKeyboardFocusIndex: (newIndex: number | null) => void;
    setMouseFocusIndex: (newIndex: number | null) => void;
}

const initialState: State = {
    isOpen: false,
    keyboardFocusIndex: null,
    mouseFocusIndex: null,
};

const useDropdownState = (): UseDropdownState => {
    const [state, setState] = useState(initialState);

    const closeDropdown = useCallback(() => {
        setState(initialState);
    }, []);

    const openDropdown = useCallback(() => {
        setState((prevState) => ({ ...prevState, isOpen: true }));
    }, []);

    const setKeyboardFocusIndex = useCallback((keyboardFocusIndex: number | null) => {
        setState((prevState) => ({ ...prevState, keyboardFocusIndex, mouseFocusIndex: null }));
    }, []);

    const setMouseFocusIndex = useCallback((mouseFocusIndex: number | null) => {
        setState((prevState) => ({ ...prevState, mouseFocusIndex, keyboardFocusIndex: null }));
    }, []);

    return {
        ...state,
        closeDropdown,
        openDropdown,
        setKeyboardFocusIndex,
        setMouseFocusIndex,
    };
};

export default useDropdownState;
