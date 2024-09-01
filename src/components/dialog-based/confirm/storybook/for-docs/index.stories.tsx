import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import HeightWrapper from 'src/lib/storybook/components/height-wrapper';
import Button from 'src/lib/storybook/components/button';
import Confirm from '../../confirm';

const meta: Meta = {
    title: 'Dialog Based/Confirm',
    tags: ['!dev'],
};

export default meta;

export const ConfirmStoryForDocs: StoryObj<typeof meta> = {
    render: () => {
        const [text, setText] = useState(
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatum, iure unde labore quos architecto, repudiandae sapiente animi commodi, expedita consectetur odio quia natus dolore magnam nemo. Eaque, ullam omnis.`
        );
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <HeightWrapper>
                    <form>
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
                </HeightWrapper>
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
