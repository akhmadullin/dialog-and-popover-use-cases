import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';
import classes from './styles.module.css';

const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ className, children, ...rest }) => {
    return (
        <div className={cx(classes.container, className)} {...rest}>
            {children}
        </div>
    );
};

export default Container;
