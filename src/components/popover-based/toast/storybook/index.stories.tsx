import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import Button from 'src/lib/storybook/components/button';
import withPopoverSupportsWarning from 'src/lib/storybook/decorators/with-popover-support-warning';
import withCssAnchorPositioningSupportsWarning from 'src/lib/storybook/decorators/css-anchor-positioning-support-warning';
import ToastGroup, { toastify } from '../components/toast-group';

const meta: Meta = {
    title: 'Popover Based/Toast',
    decorators: [withPopoverSupportsWarning, withCssAnchorPositioningSupportsWarning],
};

export default meta;

export const NotChangingEachOther: StoryObj<typeof meta> = {
    name: '1) Not Changing Each Other',
    args: {
        timeout: 5000,
        content: 'Пример тоста, работающего на Popover и CSS Anchor Position 🤩',
        withCloseButton: false,
    },
    render: ({ content, withCloseButton, timeout }) => {
        return (
            <ToastGroup>
                <div style={{ width: '100%', height: '75px' }}>
                    <Button
                        onClick={() => {
                            toastify(content, { withCloseButton, timeout });
                        }}
                    >
                        Показать тост
                    </Button>
                </div>
            </ToastGroup>
        );
    },
};

export const ChangingEachOther: StoryObj<typeof meta> = {
    name: '2) Changing Each Other',
    args: {
        timeout: 5000,
        content: 'Пример сообщения об ошибке',
        withCloseButton: false,
    },
    render: ({ content, withCloseButton, timeout }) => {
        return (
            <ToastGroup>
                <div style={{ width: '100%', height: '75px' }}>
                    <Button
                        onClick={() => {
                            toastify(content, { withCloseButton, timeout, id: 'the-same-id' });
                        }}
                    >
                        Нажми на меня несколько раз подряд
                    </Button>
                </div>
            </ToastGroup>
        );
    },
};
