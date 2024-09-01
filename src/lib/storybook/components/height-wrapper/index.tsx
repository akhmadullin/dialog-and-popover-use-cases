import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';
import classes from './styles.module.css';

interface HeightWrapperProps extends HTMLAttributes<HTMLDivElement> {
    height?: string;
}

const HeightWrapper: FC<PropsWithChildren<HeightWrapperProps>> = ({
    height = '300px',
    className,
    style,
    children,
    ...rest
}) => {
    return (
        <div className={cx(classes.heightWrapper, className)} style={{ height, ...style }} {...rest}>
            {children}
        </div>
    );
};

export default HeightWrapper;
