import React, { PropsWithChildren, forwardRef } from 'react';
import classes from '../styles.module.css';

interface SelectPickerProps {
    anchorName: string;
}

const SelectPicker = forwardRef<HTMLDivElement, PropsWithChildren<SelectPickerProps>>(({ children, ...rest }, ref) => {
    return (
        <div ref={ref} className={classes.select} {...rest}>
            {children}
        </div>
    );
});

export default SelectPicker;
