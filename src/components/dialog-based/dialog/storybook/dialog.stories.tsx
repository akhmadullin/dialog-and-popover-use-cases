import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Button from 'src/lib/storybook/components/button';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import Dialog from '../dialog';

const meta: Meta<typeof Dialog> = {
    title: 'Dialog Based/Dialog',
    component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const NonModal: Story = {
    args: {
        isModal: false,
        label: 'Пример немодального диалога',
        withPageScrollLock: false,
        withCloseOnOutsideClick: false,
        withCloseOnEscapeForNonModal: false,
        minWidth: '',
        minHeight: '',
        maxWidth: '',
        maxHeight: '',
    },
    parameters: {
        controls: {
            include: [
                'label',
                'withPageScrollLock',
                'withCloseOnOutsideClick',
                'withCloseOnEscapeForNonModal',
                'minWidth',
                'minHeight',
                'maxWidth',
                'maxHeight',
            ],
        },
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <Container>
                <Button onClick={() => setIsOpen(true)}>Открыть диалог</Button>
                <Dialog {...args} isOpen={isOpen} close={() => setIsOpen(false)}>
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <Text className="mb-10">Создан на основе элементе dialog.</Text>
                    <Text>
                        Имеет, как встроенный функционал, предоставляемый веб-платформой, так и докрученные сверху фичи.
                    </Text>
                </Dialog>
            </Container>
        );
    },
};

export const Modal: Story = {
    args: {
        isModal: true,
        label: 'Пример модального диалога',
        withPageScrollLock: false,
        withCloseOnOutsideClick: false,
        minWidth: '',
        minHeight: '',
        maxWidth: '',
        maxHeight: '',
    },
    parameters: {
        controls: {
            include: [
                'label',
                'withPageScrollLock',
                'withCloseOnOutsideClick',
                'minWidth',
                'minHeight',
                'maxWidth',
                'maxHeight',
            ],
        },
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <Container>
                <Button onClick={() => setIsOpen(true)}>Открыть диалог</Button>
                <Dialog {...args} isOpen={isOpen} close={() => setIsOpen(false)}>
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <Text className="mb-10">Создан на основе элементе dialog.</Text>
                    <Text>
                        Имеет, как встроенный функционал, предоставляемый веб-платформой, так и докрученные сверху фичи.
                    </Text>
                </Dialog>
            </Container>
        );
    },
};
