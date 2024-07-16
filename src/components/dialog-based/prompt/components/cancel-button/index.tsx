import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import cx from 'classnames';
import classes from './styles.module.css';

const CancelButton: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = ({ children, className, ...rest }) => {
    return (
        <button type="button" className={cx(classes.button, className)} {...rest}>
            {children}
        </button>
    );
};

export default CancelButton;
