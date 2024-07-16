import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Button from 'src/lib/storybook/components/button';
import Prompt from '../prompt';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';

const meta: Meta = {
    title: 'Dialog Based/Prompt',
};

export default meta;

export const PromptStory: StoryObj<typeof meta> = {
    render: () => {
        const [favoriteFeature, setFavoriteFeature] = useState('');
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Container>
                    <Heading>Промпт</Heading>
                    <Text>Аналогично конфёрму, можно сделать аналог нативного промпта</Text>
                    <h3 style={{ marginTop: '40px' }}>Анкета</h3>
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
                </Container>
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
