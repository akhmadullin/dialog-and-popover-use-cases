import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Button from 'src/lib/storybook/components/button';
import HeightWrapper from 'src/lib/storybook/components/height-wrapper';
import Text from 'src/lib/storybook/components/text';
import Prompt from '../../prompt';

const meta: Meta = {
    title: 'Dialog Based/Prompt',
    tags: ['!dev'],
};

export default meta;

export const PromptStoryForDocs: StoryObj<typeof meta> = {
    render: () => {
        const [favoriteFeature, setFavoriteFeature] = useState('');
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <HeightWrapper>
                    <h3>Анкета</h3>
                    <Text>
                        Мой любимый WEB API:{' '}
                        {favoriteFeature ? (
                            <span style={{ textDecoration: 'underline' }}>{favoriteFeature}</span>
                        ) : (
                            <span style={{ fontStyle: 'italic', opacity: '0.6', textDecoration: 'underline' }}>
                                не заполнено
                            </span>
                        )}
                    </Text>
                    <Button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        Заполнить
                    </Button>
                </HeightWrapper>
                <Prompt
                    isModal
                    isOpen={isOpen}
                    close={() => {
                        setIsOpen(false);
                    }}
                    question="Какой твой любимый WEB API?"
                    placeholder="Popover API, например"
                    okText="Сохранить"
                    cancelText="Отменить"
                    okCallback={(answer) => {
                        console.log('Ответ сохранен');
                        setFavoriteFeature(answer);
                    }}
                    cancelCallback={() => console.log('Отмена сохранения')}
                    label="Пример promt компонента"
                    minWidth="440px"
                />
            </>
        );
    },
};
