import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Button from 'src/lib/storybook/components/button';
import Confirm from '../confirm';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';

const meta: Meta = {
    title: 'Dialog Based/Confirm',
};

export default meta;

export const ConfirmStory: StoryObj<typeof meta> = {
    render: () => {
        const [text, setText] = useState(
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, iure unde labore quos architecto, repudiandae sapiente animi commodi, expedita consectetur odio quia natus dolore magnam nemo. Eaque, ullam omnis.`
        );
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Container>
                    <Heading>Конфёрм</Heading>
                    <Text>
                        На основе диалога можно делать вспомогательные компоненты - например, кастомизированный аналог
                        метода confirm()
                    </Text>
                    <Text>
                        Подобный компонент можно использовать там, где нужен свой кастомный дизайн и нет нужды
                        блокировать исполнение основного потока во время показа confirm
                    </Text>
                    <form style={{ marginTop: '40px' }}>
                        <label htmlFor="important-text" style={{ display: 'block', fontWeight: '700' }}>
                            Очень важный текст
                        </label>
                        <textarea
                            id="important-text"
                            placeholder="Например, Lorem ipsum dolor sit"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                            rows={8}
                            cols={50}
                        />
                    </form>
                    <Button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        Удалить текст
                    </Button>
                </Container>
                <Confirm
                    isModal
                    isOpen={isOpen}
                    close={() => {
                        setIsOpen(false);
                    }}
                    question="Удалить текст?"
                    description="Восстановление текста будет невозможно после удаления"
                    okText="Да"
                    cancelText="Нет"
                    okCallback={() => {
                        console.log('Текст был удален');
                        setText('');
                    }}
                    cancelCallback={() => {
                        console.log('Текст не был удален');
                    }}
                    label="Пример cofirm компонента"
                />
            </>
        );
    },
};
