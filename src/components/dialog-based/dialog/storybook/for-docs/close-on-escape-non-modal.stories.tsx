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

export const CloseOnEscapeNonModal: StoryObj<typeof meta> = {
    name: '3) Close On Escape Non Modal',
    render: () => {
        const [isOpenWithoutEscapeHandler, setIsOpenWithoutEscapeHandler] = useState(false);
        const [isOpenWithEscapeHandler, setIsOpenWithEscapeHandler] = useState(false);

        return (
            <>
                <HeightWrapper>
                    <ButtonsRow>
                        <Button onClick={() => setIsOpenWithoutEscapeHandler(true)}>Открыть диалог без Escape</Button>
                        <Button onClick={() => setIsOpenWithEscapeHandler(true)}>Открыть диалог с Escape</Button>
                    </ButtonsRow>
                </HeightWrapper>
                <Dialog
                    isModal={false}
                    isOpen={isOpenWithoutEscapeHandler}
                    close={() => setIsOpenWithoutEscapeHandler(false)}
                    labeledBy="headingOfWithoutEscape"
                >
                    <Heading id="headingOfWithoutEscape" className="mb-20">
                        Дефолтный диалог
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
                        Продвинутый диалог
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
