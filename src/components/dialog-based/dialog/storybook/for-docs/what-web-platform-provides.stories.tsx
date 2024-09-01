import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import HeightWrapper from 'src/lib/storybook/components/height-wrapper';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import ButtonsRow from 'src/lib/storybook/components/buttons-row';
import Button from 'src/lib/storybook/components/button';
import UnsortedList from 'src/lib/storybook/components/unsorted-list';
import Dialog from '../../dialog';

const meta: Meta = {
    title: 'Dialog Based/Dialog',
    tags: ['!dev'],
};

export default meta;

export const WhatWebPlatformProvides: StoryObj<typeof meta> = {
    name: '2) What Web Platform Provides',
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
                    withPageScrollLock
                >
                    <Heading className="mb-20">Немодальный диалог</Heading>
                    <UnsortedList
                        options={[
                            `Меня можно открыть из JavaScript'а с помощью метода show()`,
                            `Меня можно закрыть из JavaScript'а с помощью метода close()`,
                        ]}
                    />
                </Dialog>
                <Dialog
                    isModal
                    isOpen={isOpenModal}
                    close={() => setIsOpenModal(false)}
                    label="Пример модального диалога"
                >
                    <Heading className="mb-20">Модальный диалог</Heading>
                    <UnsortedList
                        options={[
                            `Меня можно открыть из JavaScript'а с помощью метода showModal()`,
                            `Меня можно закрыть из JavaScript'а с помощью метода close()`,
                            `Меня можно закрыть с помощью клавиши Escape`,
                        ]}
                    />
                </Dialog>
            </>
        );
    },
};
