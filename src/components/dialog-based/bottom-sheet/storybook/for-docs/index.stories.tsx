import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ViewportType } from 'storybook-config/viewports';
import HeightWrapper from 'src/lib/storybook/components/height-wrapper';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import Button from 'src/lib/storybook/components/button';
import BottomSheet from '../../bottom-sheet';

const meta: Meta = {
    title: 'Dialog Based/Bottom sheet',
    tags: ['!dev'],
};

export default meta;

export const BottomSheetStoryForDocs: StoryObj<typeof meta> = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <HeightWrapper style={{ padding: '0' }}>
                    <Button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        Открыть Bottom Sheet
                    </Button>
                </HeightWrapper>
                <div>
                    <BottomSheet
                        isModal
                        isOpen={isOpen}
                        close={() => {
                            setIsOpen(false);
                        }}
                        withCloseOnOutsideClick
                        label="Пример Bottom Sheet компонента"
                    >
                        <Heading className="mb-20">Bottom Sheet</Heading>
                        <Text className="mb-10">На самом деле, я – обычный диалог.</Text>
                        <Text className="mb-10">
                            Но я могу выезжать снизу страницы, как Bottom Sheet в мобильных приложениях.
                        </Text>
                        <Text>И закрываться по клику на свободную область экрана.</Text>
                    </BottomSheet>
                </div>
            </>
        );
    },
};

export const BottomSheetStoryInIfame: StoryObj<typeof meta> = {
    render: () => {
        return (
            <div
                style={{
                    borderRadius: '16px',
                    border: '2px solid hsla(203, 50%, 30%, 0.15)',
                    width: '375px',
                    height: '600px',
                    margin: '0 auto',
                    overflow: 'hidden',
                }}
            >
                <iframe
                    src="?path=/story/dialog-based-bottom-sheet--bottom-sheet-story-for-docs&globals=viewport:MobileMedium--default&full=1&shortcuts=false&singleStory=true"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        );
    },
};
