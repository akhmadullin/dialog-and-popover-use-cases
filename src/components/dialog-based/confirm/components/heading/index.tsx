import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';
import classes from './styles.module.css';

const Heading: FC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = ({ children, className, ...rest }) => {
    return (
        <h2 className={cx(classes.heading, className)} {...rest}>
            {children}
        </h2>
    );
};

export default Heading;
