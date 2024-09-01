import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import CenteredContentWithScroll from 'src/lib/storybook/components/centered-content-with-scroll';
import Button from 'src/lib/storybook/components/button';
import TooltipWithFixedOrientation from '../tooltip-with-fixed-orientation';

const meta: Meta<typeof TooltipWithFixedOrientation> = {
    title: 'Popover Based/Tooltip with fixed orientation',
};

export default meta;

export const TooltipStory: StoryObj<typeof TooltipWithFixedOrientation> = {
    args: {
        orientation: 'vertical',
        children: 'Пример тултипа',
        width: 'max-content',
        height: 'auto',
        maxHeight: 'auto',
        maxWidth: 'auto',
    },
    argTypes: {
        orientation: {
            options: ['vertical', 'horizontal'],
            control: {
                type: 'select',
            },
        },
        children: {
            control: 'text',
        },
        width: {
            control: 'text',
        },
        height: {
            control: 'text',
        },
        maxWidth: {
            control: 'text',
        },
        maxHeight: {
            control: 'text',
        },
    },
    render: (args) => {
        const exampleTooltipId = 'example-tooltip';
        const exampleTooltipAnchorName = `--${exampleTooltipId}-button`;

        return (
            <CenteredContentWithScroll>
                <Button
                    popovertarget={exampleTooltipId}
                    aria-describedby={exampleTooltipId}
                    style={{ anchorName: exampleTooltipAnchorName } as React.CSSProperties}
                >
                    Показать тултип
                </Button>
                <TooltipWithFixedOrientation
                    {...args}
                    id={exampleTooltipId}
                    anchorElementName={exampleTooltipAnchorName}
                />
            </CenteredContentWithScroll>
        );
    },
};
