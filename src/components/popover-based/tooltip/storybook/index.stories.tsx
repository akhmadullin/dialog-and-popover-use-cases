import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Button from 'src/lib/storybook/components/button';
import Tooltip from '../tooltip';
import { TooltipProps } from '../types';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';

const meta: Meta<TooltipProps> = {
    title: 'Popover Based/Tooltip',
};

export default meta;

export const TooltipStory: StoryObj<typeof meta> = {
    render: () => {
        const tooltipId = 'tooltip-example';
        const buttonAnchorName = '--example-button';
        return (
            <Container style={{ minWidth: '200vw', minHeight: '200vh' }}>
                <Heading>Тултип</Heading>
                <Text>
                    Очень часто в интерфейсах нужно показать тултип - подсказку, которая дает пользователю больше
                    информации о том, что происходит на странице
                </Text>
                <Button
                    popovertarget={tooltipId}
                    aria-describedby={tooltipId}
                    style={{ anchorName: buttonAnchorName, marginLeft: '300px' } as React.CSSProperties}
                >
                    Показать тултип
                </Button>
                <Tooltip id={tooltipId} anchorElementName={buttonAnchorName}>
                    Могу адаптироваться под видимую область вокруг меня. Попробуй поскролить страницу.
                </Tooltip>
            </Container>
        );
    },
};
