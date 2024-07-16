import React, { HTMLAttributes, forwardRef } from 'react';
import cx from 'classnames';
import classes from './styles.module.css';

const Input = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(({ className, ...rest }, ref) => {
    return <input ref={ref} {...rest} className={cx(classes.input, className)} />;
});

export default Input;
