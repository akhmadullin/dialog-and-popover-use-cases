import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Button from 'src/lib/storybook/components/button';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import ToastGroup, { toastify } from '../components/toast-group';

const meta: Meta = {
    title: 'Popover Based/Toast',
    args: {
        timeout: 5000,
        content: `Привет! Я тост "испеченный" через Popover и CSS Anchor Position 🤩`,
        withCloseButton: false,
    },
};

export default meta;

export const NotChangingEachOther: StoryObj<typeof meta> = {
    name: '1) Not Changing Each Other',
    render: ({ content, withCloseButton, timeout }) => {
        return (
            <ToastGroup>
                <Container>
                    <Heading>Тост</Heading>
                    <Text>Тосты, нотификации - куда же без них.</Text>
                    <Button
                        onClick={() => {
                            toastify(content, { withCloseButton, timeout });
                        }}
                    >
                        Показать тост
                    </Button>
                </Container>
            </ToastGroup>
        );
    },
};

export const ChangingEachOther: StoryObj<typeof meta> = {
    name: '2) Changing Each Other',
    render: ({ content, withCloseButton, timeout }) => {
        return (
            <ToastGroup>
                <Container>
                    <Heading>Тост</Heading>
                    <Text>
                        Порой необходимо, чтобы нотификация об одной и том же событии, сменяла своего предшественника.
                        Например, если это нотификации об одной и той же ошибке.
                    </Text>
                    <Button
                        onClick={() => {
                            toastify(content, { withCloseButton, timeout, id: 'the-same-id' });
                        }}
                    >
                        Нажми на меня несколько раз подряд
                    </Button>
                </Container>
            </ToastGroup>
        );
    },
};
