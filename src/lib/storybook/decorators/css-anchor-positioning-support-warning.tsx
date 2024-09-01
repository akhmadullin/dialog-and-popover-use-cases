import React from 'react';
import { Decorator } from '@storybook/react';
import CssAnchorPositioningSupportsWarning from '../components/css-anchor-positioning-support-warning';

const withCssAnchorPositioningSupportsWarning: Decorator = (Story) => (
    <>
        <CssAnchorPositioningSupportsWarning />
        <Story />
    </>
);

export default withCssAnchorPositioningSupportsWarning;
