import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Button from 'src/lib/storybook/components/button';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import BottomSheet from '../bottom-sheet';
import { ViewportType } from 'storybook-config/viewports';

const meta: Meta<typeof BottomSheet> = {
    title: 'Dialog Based/BottomSheet',
    component: BottomSheet,
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const BottomSheetStory: Story = {
    args: {
        isModal: true,
        label: 'Пример BottomSheet',
        withPageScrollLock: true,
        withCloseOnOutsideClick: true,
    },
    parameters: {
        controls: {
            include: ['label', 'withPageScrollLock', 'withCloseOnOutsideClick'],
        },
        viewport: { defaultViewport: ViewportType.MobileMedium },
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <Container>
                <Button onClick={() => setIsOpen(true)}>Открыть Bottom Sheet</Button>
                <BottomSheet {...args} isOpen={isOpen} close={() => setIsOpen(false)}>
                    <Heading className="mb-20">Bottom Sheet</Heading>
                    <Text>
                        Диалог, который выглядит и анимируется, как элемент из мобильных платформ – Bottom Sheet.
                    </Text>
                    <Text>Может быть полезным для создания похожего UI между вебом и мобилками.</Text>
                </BottomSheet>
            </Container>
        );
    },
};
