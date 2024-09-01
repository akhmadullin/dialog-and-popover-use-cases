import React from 'react';
import { Decorator } from '@storybook/react';
import PopoverSupportsWarning from '../components/popover-support-warning';

const withPopoverSupportsWarning: Decorator = (Story) => (
    <>
        <PopoverSupportsWarning />
        <Story />
    </>
);

export default withPopoverSupportsWarning;
