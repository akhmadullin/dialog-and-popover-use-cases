import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Button from 'src/lib/storybook/components/button';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';

const meta: Meta = {
    title: 'Intro',
};

export default meta;

export const Intro: StoryObj<typeof meta> = {
    render: () => {
        return (
            <>
                <Container>
                    <Heading>Элемент dialog и атрибут popover</Heading>
                    <Text>
                        В сторибуке собраны компоненты, сделанные на основе{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog">диалога</a> и{' '}
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover">
                            поповера
                        </a>
                        .
                    </Text>
                    <Text>Лучше всего смотреть истории по порядку: одну за одной.</Text>
                    <Text>Приятного знакомства!</Text>
                </Container>
            </>
        );
    },
};
