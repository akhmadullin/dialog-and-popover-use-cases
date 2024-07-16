import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import prepareCssProps from './helpers/prepare-css-props';
import classes from './styles.module.css';
import { TooltipWithFixedOrientationProps } from './types';

const TooltipWithFixedOrientation: FC<PropsWithChildren<TooltipWithFixedOrientationProps>> = ({
    id,
    anchorElementName,
    className,
    orientation,
    width,
    height,
    maxWidth,
    maxHeight,
    children,
}) => {
    return (
        <div
            popover="auto"
            id={id}
            role="tooltip"
            className={cx(
                classes.tooltip,
                orientation === 'horizontal' ? classes.tooltipLeftRight : classes.tooltipTopBottom,
                className
            )}
            style={{
                ...prepareCssProps({ width, height, maxWidth, maxHeight }),
                '--anchor-el-name': anchorElementName,
                '--tooltip-el-name': `--${id}-tooltip`,
            }}
        >
            <div className={classes.tooltipContent}>{children}</div>
        </div>
    );
};

export default TooltipWithFixedOrientation;