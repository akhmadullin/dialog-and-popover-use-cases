import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import CenteredContentWithScroll from 'src/lib/storybook/components/centered-content-with-scroll';
import Button from 'src/lib/storybook/components/button';
import Tooltip from '../../tooltip';
import { TooltipProps } from '../../types';

const meta: Meta<TooltipProps> = {
    title: 'Popover Based/Tooltip',
    tags: ['!dev'],
};

export default meta;

export const TooltipStoryForDocs: StoryObj<typeof meta> = {
    render: () => {
        const tooltipId = 'tooltip-example';
        const buttonAnchorName = '--example-button';
        return (
            <CenteredContentWithScroll>
                <Button
                    popovertarget={tooltipId}
                    aria-describedby={tooltipId}
                    style={{ anchorName: buttonAnchorName } as React.CSSProperties}
                >
                    Показать тултип
                </Button>
                <Tooltip id={tooltipId} anchorElementName={buttonAnchorName} width="400px">
                    Адаптируюсь под видимую область вокруг меня. Попробуй поскролить страницу.
                </Tooltip>
            </CenteredContentWithScroll>
        );
    },
};