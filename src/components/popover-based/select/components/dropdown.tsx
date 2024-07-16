import React, { PropsWithChildren, forwardRef } from 'react';
import classes from '../styles.module.css';

const Dropdown = forwardRef<HTMLDivElement, PropsWithChildren>(({ children, ...rest }, ref) => {
    return (
        <div ref={ref} className={classes.dropdown} {...rest}>
            {children}
        </div>
    );
});

export default Dropdown;
