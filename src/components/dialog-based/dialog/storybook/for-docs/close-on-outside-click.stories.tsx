import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import HeightWrapper from 'src/lib/storybook/components/height-wrapper';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import ButtonsRow from 'src/lib/storybook/components/buttons-row';
import Button from 'src/lib/storybook/components/button';
import Dialog from '../../dialog';

const meta: Meta = {
    title: 'Dialog Based/Dialog',
    tags: ['!dev'],
};

export default meta;

export const CloseOnOutsideClick: StoryObj<typeof meta> = {
    name: '4) Close On Outside Click',
    render: () => {
        const [isOpenNonModal, setIsOpenNonModal] = useState(false);
        const [isOpenModal, setIsOpenModal] = useState(false);

        return (
            <>
                <HeightWrapper>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonModal(true)}>Открыть немодальный диалог</Button>
                        <Button onClick={() => setIsOpenModal(true)}>Открыть модальный диалог</Button>
                    </ButtonsRow>
                </HeightWrapper>
                <Dialog
                    isModal={false}
                    isOpen={isOpenNonModal}
                    close={() => setIsOpenNonModal(false)}
                    label="Пример немодального диалога"
                    withCloseOnOutsideClick
                >
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <Text className="mb-10">Меня можно закрыть с помощью клика на свободную область страницы.</Text>
                    <Text>Это все благодаря пропу withCloseOnOutsideClick.</Text>
                </Dialog>
                <Dialog
                    isModal
                    isOpen={isOpenModal}
                    close={() => setIsOpenModal(false)}
                    label="Пример модального диалога"
                    withCloseOnOutsideClick
                >
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <Text className="mb-10">
                        Меня тоже можно закрыть с помощью клика на свободную область страницы.
                    </Text>
                    <Text>Попробуйте!</Text>
                </Dialog>
            </>
        );
    },
};
