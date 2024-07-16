import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Select, { OptionData } from '../select';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';

const meta: Meta = {
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
    render: () => {
        const [singleValue, setSingleValue] = useState<string[]>([]);
        const [multipleValue, setMultipleValue] = useState<string[]>([]);
        return (
            <Container style={{ minHeight: '200vh' }}>
                <Heading>Селект</Heading>
                <Text>Поповер может пригодиться в качестве дропдауна для селектообразных компонентов.</Text>
                <div style={{ display: 'flex', gap: '20px', margin: '100px auto' }}>
                    <Select
                        value={singleValue}
                        onChange={setSingleValue}
                        options={options}
                        label="Любимый фрукт"
                        placeholder="Только один"
                        emptyOptionContent="Любой фрукт"
                    />
                    <Select
                        value={multipleValue}
                        onChange={setMultipleValue}
                        options={options}
                        label="Любимые фрукты"
                        placeholder="Можно несколько"
                        emptyOptionContent="Любой фрукт"
                        multiple
                    />
                </div>

                <Text>А если добавить CSS Anchor Positioning, то вообще будет песня!</Text>
                <Text>Попробуй поскролить или изменить высоту вьюпорта.</Text>
            </Container>
        );
    },
};
