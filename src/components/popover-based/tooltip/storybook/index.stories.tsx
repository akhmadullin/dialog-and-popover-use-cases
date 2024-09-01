import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import CenteredContentWithScroll from 'src/lib/storybook/components/centered-content-with-scroll';
import Button from 'src/lib/storybook/components/button';
import Tooltip from '../tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'Popover Based/Tooltip',
};

export default meta;

export const TooltipStory: StoryObj<typeof Tooltip> = {
    args: {
        children: 'Пример тултипа',
        width: 'max-content',
        height: 'auto',
        maxHeight: 'auto',
        maxWidth: 'auto',
    },
    argTypes: {
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
                <Tooltip {...args} id={exampleTooltipId} anchorElementName={exampleTooltipAnchorName} />
            </CenteredContentWithScroll>
        );
    },
};
