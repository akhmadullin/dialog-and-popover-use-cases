import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Container from 'src/lib/storybook/components/container';
import Button from 'src/lib/storybook/components/button';
import TooltipWithFixedOrientation from '../tooltip-with-fixed-orientation';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';
import ButtonsRow from 'src/lib/storybook/components/buttons-row';

const meta: Meta = {
    title: 'Popover Based/Tooltip with fixed orientation',
};

export default meta;

export const TooltipStory: StoryObj<typeof meta> = {
    render: () => {
        const verticalTooltipId = 'vertical-tooltip';
        const verticalTooltipAnchorName = `--${verticalTooltipId}-button`;

        const horizontalTooltipId = 'horizontal-tooltip';
        const horizontalTooltipAnchorName = `--${horizontalTooltipId}-button`;
        return (
            <Container style={{ minWidth: '200vw', minHeight: '200vh' }}>
                <Heading>Тултип с фиксировой осью</Heading>
                <Text>
                    Иногда нужно, чтобы тултип показывался либо сверху/снизу, либо справа/слева. Такое тоже можем себе
                    позволить.
                </Text>
                <ButtonsRow>
                    <Button
                        popovertarget={verticalTooltipId}
                        aria-describedby={verticalTooltipId}
                        style={{ anchorName: verticalTooltipAnchorName, marginLeft: '200px' } as React.CSSProperties}
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
                </ButtonsRow>

                <TooltipWithFixedOrientation
                    id={verticalTooltipId}
                    anchorElementName={verticalTooltipAnchorName}
                    orientation="vertical"
                    maxWidth="300px"
                >
                    Адаптируюсь под видимую область страницы по вертикальной оси. Попробуй поскролить страницу.
                </TooltipWithFixedOrientation>
                <TooltipWithFixedOrientation
                    id={horizontalTooltipId}
                    anchorElementName={horizontalTooltipAnchorName}
                    orientation="horizontal"
                    maxWidth="200px"
                >
                    А я могу подстраиваться под вьюпорт по вертикали.
                </TooltipWithFixedOrientation>
            </Container>
        );
    },
};
