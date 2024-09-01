import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import CenteredContentWithScroll from 'src/lib/storybook/components/centered-content-with-scroll';
import Button from 'src/lib/storybook/components/button';
import TooltipWithFixedOrientation from '../../tooltip-with-fixed-orientation';

const meta: Meta = {
    title: 'Popover Based/Tooltip with fixed orientation',
    tags: ['!dev'],
};

export default meta;

export const TooltipStoryForDocs: StoryObj<typeof meta> = {
    render: () => {
        const verticalTooltipId = 'vertical-tooltip';
        const verticalTooltipAnchorName = `--${verticalTooltipId}-button`;

        const horizontalTooltipId = 'horizontal-tooltip';
        const horizontalTooltipAnchorName = `--${horizontalTooltipId}-button`;

        return (
            <CenteredContentWithScroll>
                <Button
                    popovertarget={verticalTooltipId}
                    aria-describedby={verticalTooltipId}
                    style={{ anchorName: verticalTooltipAnchorName } as React.CSSProperties}
                >
                    Показать вертикальный тултип
                </Button>
                <Button
                    popovertarget={horizontalTooltipId}
                    aria-describedby={horizontalTooltipId}
                    style={{ anchorName: horizontalTooltipAnchorName } as React.CSSProperties}
                >
                    Показать горизонтальный тултип
                </Button>
                <TooltipWithFixedOrientation
                    id={verticalTooltipId}
                    anchorElementName={verticalTooltipAnchorName}
                    orientation="vertical"
                    width="300px"
                >
                    Адаптируюсь под видимую область страницы по вертикальной оси. Попробуй поскролить страницу.
                </TooltipWithFixedOrientation>
                <TooltipWithFixedOrientation
                    id={horizontalTooltipId}
                    anchorElementName={horizontalTooltipAnchorName}
                    orientation="horizontal"
                    width="230px"
                >
                    А я могу подстраиваться под вьюпорт по вертикали.
                </TooltipWithFixedOrientation>
            </CenteredContentWithScroll>
        );
    },
};
