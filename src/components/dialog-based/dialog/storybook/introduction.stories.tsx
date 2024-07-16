import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';

const meta: Meta = {
    title: 'Dialog Based/Dialog',
};

export default meta;

export const Introduction: StoryObj<typeof meta> = {
    name: '0) Intro',
    render: () => {
        return (
            <Container>
                <Heading>Диалог</Heading>
                <Text>Как ни странно, на основе элемента dialog можно сделать компонент диалог.</Text>
                <Text>Он может иметь как встроенные плюшки веб платформы, так и накрученный сверху кастом.</Text>
                <Text>Но обо всем по порядку!</Text>
            </Container>
        );
    },
};
