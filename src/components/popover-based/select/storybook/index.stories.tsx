import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Select, { OptionData } from '../select';
import CenteredContentWithScroll from 'src/lib/storybook/components/centered-content-with-scroll';

const meta: Meta<typeof Select> = {
    title: 'Popover Based/Select',
};

export default meta;

const options: OptionData[] = [
    { key: '1', content: <>🍍 Ананас</> },
    { key: '2', content: <>🍊 Апельсин</> },
    { key: '3', content: <>🍌 Банан</> },
    { key: '4', content: <>🍐 Груша</> },
    { key: '5', content: <>🥝 Киви</> },
    { key: '6', content: <>🥥 Кокос</> },
    { key: '7', content: <>🍑 Персик</> },
    { key: '8', content: <>🍎 Яблоко</> },
];

export const SelectStory: StoryObj<typeof meta> = {
    args: {
        options,
        disabled: false,
        emptyOptionContent: 'Любой фрукт',
    },
    argTypes: {
        options: {
            control: 'object',
        },
        disabled: {
            control: 'boolean',
        },
        emptyOptionContent: {
            control: 'text',
        },
    },
    render: (args) => {
        const [singleValue, setSingleValue] = useState<string[]>([]);
        const [multipleValue, setMultipleValue] = useState<string[]>([]);
        return (
            <CenteredContentWithScroll>
                <Select {...args} value={singleValue} onChange={setSingleValue} placeholder="Только один" />
                <Select
                    {...args}
                    value={multipleValue}
                    onChange={setMultipleValue}
                    placeholder="Можно несколько"
                    multiple
                />
            </CenteredContentWithScroll>
        );
    },
};
