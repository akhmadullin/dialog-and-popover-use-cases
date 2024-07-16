import React, { FC, ReactElement, useCallback, useLayoutEffect } from 'react';
import useCustomSelectData, { RawEmptyOptionData, RawNotEmptyOptionData } from './hooks/use-custom-select-data';
import Container from './components/container';
import Label from './components/label';
import SelectPicker from './components/select-picker';
import SelectBox from './components/select-box';
import Dropdown from './components/dropdown';
import CleanValueButton from './components/clean-value-button';
import Divider from './components/divider';
import OptionsList from './components/options-list';
import Option from './components/option';

type Value = string;

export interface OptionData {
    key: Value;
    content: ReactElement | string;
}

export interface SelectProps {
    value: Value[];
    onChange: (value: Value[]) => void;
    disabled?: boolean;
    options: OptionData[];
    emptyOptionContent?: ReactElement | string;
    label: string;
    placeholder: string;
    multiple?: boolean;
}

interface EmptyOptionDataForHook extends RawEmptyOptionData {
    content: ReactElement | string;
}

interface NotEmptyOptionDataForHook extends RawNotEmptyOptionData, OptionData {}

const Select: FC<SelectProps> = ({
    value,
    onChange,
    disabled = false,
    options,
    emptyOptionContent = null,
    label,
    placeholder,
    multiple = false,
}) => {
    const updateValue = useCallback(
        (key: Value, isActive: boolean) => {
            if (!multiple) {
                onChange([key]);
                return;
            }
            if (isActive) {
                onChange(value.filter((item) => key !== item));
            } else {
                onChange([...value, key]);
            }
        },
        [multiple, onChange, value]
    );

    const optionsForHook: (EmptyOptionDataForHook | NotEmptyOptionDataForHook)[] = options.map(({ key, content }) => {
        const isActive = value.includes(key);
        return {
            key,
            content,
            empty: false,
            active: isActive,
            changeValue: () => updateValue(key, isActive),
        };
    });

    if (emptyOptionContent) {
        optionsForHook.unshift({
            empty: true,
            content: emptyOptionContent,
        });
    }

    const { pickerProps, selectBoxProps, dropdownProps, optionsData } = useCustomSelectData<
        Value,
        EmptyOptionDataForHook,
        NotEmptyOptionDataForHook
    >({
        value,
        onChange,
        rawOptionsData: optionsForHook,
        optionsGap: 5,
        pickerLabel: label,
        multiple,
        navigationOrientation: 'vertical',
    });

    // TODO подумать над тем, чтобы унести это в хук use custom select data
    const optionsDict = optionsData.reduce((acc, item) => {
        if (item.empty) {
            return acc;
        }
        acc[item.key] = item;
        return acc;
    }, {});

    // TODO подумать наж тем, чтобы можно было кастомизировать вывод (assemble value)
    const getSelectBoxContent = () => {
        if (value.length === 0) {
            return placeholder;
        }

        if (multiple === false) {
            console.log(optionsDict[value[0]].content);
            return optionsDict[value[0]].content;
        }

        return value.reduce((acc, item, index, arr) => {
            acc.push(optionsDict[item].content);
            if (index !== arr.length - 1) {
                acc.push(<>, </>);
            }
            return acc;
        }, []);
    };

    return (
        <Container>
            {/* todo надо бы сделать aria-labeled-by */}
            <Label>{label}</Label>
            <SelectPicker {...pickerProps}>
                <SelectBox empty={value.length === 0} disabled={disabled} {...selectBoxProps}>
                    {getSelectBoxContent()}
                </SelectBox>
                <Dropdown {...dropdownProps}>
                    {optionsData[0] && optionsData[0].empty && (
                        <>
                            <CleanValueButton {...optionsData[0]} />
                            {optionsData.length > 0 && <Divider />}
                        </>
                    )}
                    <OptionsList>
                        {optionsData.map((data) => {
                            if (data.empty) {
                                return null;
                            }

                            return <Option {...data} key={data.key} />;
                        })}
                    </OptionsList>
                </Dropdown>
            </SelectPicker>
        </Container>
    );
};

export default Select;
