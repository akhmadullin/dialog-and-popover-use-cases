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
    // tags: ['autodocs', '!dev'],
};

export default meta;

export const NonModalVsModal: StoryObj<typeof meta> = {
    name: '1) Non Modal Vs Modal',
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
                >
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <Text>Хоть я и нахожусь поверх кнопок, они все еще доступны для взаимодействия</Text>
                </Dialog>
                <Dialog
                    isModal
                    isOpen={isOpenModal}
                    close={() => setIsOpenModal(false)}
                    label="Пример модального диалога"
                >
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <Text>Весь остальной контент страницы недоступен, пока я открыт</Text>
                </Dialog>
            </>
        );
    },
};
