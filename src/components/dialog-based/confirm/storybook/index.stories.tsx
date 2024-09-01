import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Button from 'src/lib/storybook/components/button';
import Confirm from '../confirm';

const meta: Meta<typeof Confirm> = {
    title: 'Dialog Based/Confirm',
    component: Confirm,
};

export default meta;
type Story = StoryObj<typeof Confirm>;

export const ConfirmStory: Story = {
    args: {
        isModal: true,
        label: 'Пример confirm',
        question: 'Очень важный вопрос?',
        okText: 'Да',
        cancelText: 'Нет',
        withPageScrollLock: false,
        withCloseOnOutsideClick: false,
        minWidth: '350px',
        minHeight: '',
        maxWidth: '',
        maxHeight: '',
    },
    parameters: {
        controls: {
            include: [
                'label',
                'question',
                'okText',
                'cancelText',
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
                <Button onClick={() => setIsOpen(true)}>Открыть confirm</Button>
                <Confirm {...args} isOpen={isOpen} close={() => setIsOpen(false)} />
            </Container>
        );
    },
};
