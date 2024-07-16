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

export const CloseOnEscapeNonModal: StoryObj<typeof meta> = {
    name: '3) Close On Escape Non Modal',
    render: () => {
        const [isOpenWithoutEscapeHandler, setIsOpenWithoutEscapeHandler] = useState(false);
        const [isOpenWithEscapeHandler, setIsOpenWithEscapeHandler] = useState(false);

        return (
            <>
                <Container>
                    <Heading>Закрытие диалога на Escape</Heading>
                    <Text>
                        По дефолту браузеры дают возможность закрывать по нажатию на Escape только модальные диалоги.
                    </Text>
                    <Text>Если эта фича необходима и для немодальных диалогов, то ее можно реализовать самим.</Text>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenWithoutEscapeHandler(true)}>Открыть диалог без Escape</Button>
                        <Button onClick={() => setIsOpenWithEscapeHandler(true)}>Открыть диалог с Escape</Button>
                    </ButtonsRow>
                </Container>
                <Dialog
                    isModal={false}
                    isOpen={isOpenWithoutEscapeHandler}
                    close={() => setIsOpenWithoutEscapeHandler(false)}
                    labeledBy="headingOfWithoutEscape"
                >
                    <Heading id="headingOfWithoutEscape" className="mb-20">
                        Я - дефолтный диалог
                    </Heading>
                    <Text>Так как я немодальный, закрыть меня с помощью Escape не выйдет - как ни пытайся!</Text>
                </Dialog>
                <Dialog
                    isModal={false}
                    isOpen={isOpenWithEscapeHandler}
                    close={() => setIsOpenWithEscapeHandler(false)}
                    labeledBy="headingOfWithEscape"
                    withCloseOnEscapeForNonModal
                >
                    <Heading id="headingOfWithEscape" className="mb-20">
                        Я - продвинутый диалог
                    </Heading>
                    <Text className="mb-10">
                        Хоть я и немодальный диалог, меня можно закрыть в помощью клавиши Escape.
                    </Text>
                    <Text className="mb-10">Это работает благодаря пропу withCloseOnEscapeForNonModal.</Text>
                </Dialog>
            </>
        );
    },
};
