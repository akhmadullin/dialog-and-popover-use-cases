import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import ButtonsRow from 'src/lib/storybook/components/buttons-row';
import Button from 'src/lib/storybook/components/button';
import Dialog from '../dialog';

const meta: Meta = {
    title: 'Dialog Based/Dialog',
};

export default meta;

export const PageScrollLock: StoryObj<typeof meta> = {
    name: '5) Page Scroll Lock',
    render: () => {
        const [isOpenNonBlockingPageScroll, setIsOpenNonBlockingPageScroll] = useState(false);
        const [isOpenBlockingPageScroll, setIsOpenBlockingPageScroll] = useState(false);

        return (
            <>
                <Container>
                    <Heading>Блокировка скролла страницы</Heading>
                    <Text>Иногда, бывает полезно блокировать скролл остальной страницы, пока открыт диалог.</Text>
                    <Text>Элемент Dialog не делает этого по дефолту. Но это можно исправить.</Text>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenNonBlockingPageScroll(true)}>
                            Открыть диалог, неблокирующий скролл
                        </Button>
                        <Button onClick={() => setIsOpenBlockingPageScroll(true)}>
                            Открыть диалог с блокировкой скролла
                        </Button>
                    </ButtonsRow>
                </Container>

                <Dialog
                    isModal={false}
                    isOpen={isOpenNonBlockingPageScroll}
                    close={() => setIsOpenNonBlockingPageScroll(false)}
                    labeledBy="headingOfNonBlocking"
                >
                    <Heading id="headingOfNonBlocking" className="mb-20">
                        Я не блокирую скролл страницы
                    </Heading>
                    <Text>Попробуйте проскроллить контент страницы позади меня - я дам с легкостью это сделать</Text>
                </Dialog>
                <Dialog
                    isModal={false}
                    isOpen={isOpenBlockingPageScroll}
                    close={() => setIsOpenBlockingPageScroll(false)}
                    labeledBy="headingOfBlocking"
                    withPageScrollLock
                >
                    <Heading id="headingOfBlocking" className="mb-20">
                        Я блокирую скролл страницы
                    </Heading>
                    <Text className="mb-10">Пока я открыт, скролл страницы заблокирован.</Text>
                    <Text className="mb-10">Эта фича активируется с помощью пропа withPageScrollLock.</Text>
                    <Text className="mb-10">
                        Данный проп активирует CSS, который блокирует скролл контента позади меня.
                    </Text>
                </Dialog>
            </>
        );
    },
};
