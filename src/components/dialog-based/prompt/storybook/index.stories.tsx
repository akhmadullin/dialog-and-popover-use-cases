import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Button from 'src/lib/storybook/components/button';
import Prompt from '../prompt';

const meta: Meta<typeof Prompt> = {
    title: 'Dialog Based/Prompt',
    component: Prompt,
};

export default meta;
type Story = StoryObj<typeof Prompt>;

export const PromptStory: Story = {
    args: {
        isModal: true,
        label: 'Пример Prompt',
        question: 'Очень важный вопрос?',
        placeholder: 'Введите ответ',
        okText: 'Сохранить',
        cancelText: 'Отмена',
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
                'placeholder',
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
        const [answer, setAnswer] = useState('');
        return (
            <Container>
                <div className="mb-20">
                    <span>Ответ на вопрос: </span>
                    <span>
                        {' '}
                        {answer ? (
                            <span style={{ textDecoration: 'underline' }}>{answer}</span>
                        ) : (
                            <span style={{ fontStyle: 'italic', opacity: '0.6', textDecoration: 'underline' }}>
                                не заполнено
                            </span>
                        )}
                    </span>
                </div>
                <Button onClick={() => setIsOpen(true)}>Открыть Prompt</Button>
                <Prompt
                    {...args}
                    isOpen={isOpen}
                    close={() => setIsOpen(false)}
                    okCallback={(value) => setAnswer(value)}
                />
            </Container>
        );
    },
};
