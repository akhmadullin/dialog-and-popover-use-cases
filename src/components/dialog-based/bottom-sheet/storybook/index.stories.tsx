import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ViewportType } from 'storybook-config/viewports';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import Button from 'src/lib/storybook/components/button';
import BottomSheet from '../bottom-sheet';

const meta: Meta = {
    title: 'Dialog Based/Bottom sheet',
};

export default meta;

export const BottomSheetStory: StoryObj<typeof meta> = {
    parameters: {
        viewport: { defaultViewport: ViewportType.MobileMedium },
    },
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Container style={{ padding: '0' }}>
                    <Heading>Диалог в мобильном вебе или вебвью</Heading>
                    <Text>В мобильном вебе интерфейс часто подражает мобильным приложениям</Text>
                    <Text>
                        И чтобы создать ощущение единной системы, диалог может эмитировать элемент из мобильных платформ
                        - Bottom Sheet
                    </Text>
                    <Button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        Открыть Bottom Sheet
                    </Button>
                </Container>
                <BottomSheet
                    isModal
                    isOpen={isOpen}
                    close={() => {
                        setIsOpen(false);
                    }}
                    withCloseOnOutsideClick
                    label="Пример Bottom Sheet компонента"
                >
                    <Heading className="mb-20">Я - Bottom Sheet</Heading>
                    <Text className="mb-10">На самом деле, я - обычный диалог.</Text>
                    <Text className="mb-10">
                        Но я могу выезжать снизу страницы, как Bottom Sheet в мобильных приложениях.
                    </Text>
                    <Text className="mb-10">И закрываться по клику на свободную область экрана.</Text>
                    <Text>Так-то!</Text>
                </BottomSheet>
            </>
        );
    },
};
