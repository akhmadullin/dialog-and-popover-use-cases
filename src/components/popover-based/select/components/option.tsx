import React, { ReactElement, forwardRef } from 'react';
import classes from '../styles.module.css';

interface OptionProps {
    highlighted: boolean;
    content: ReactElement | string;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(({ highlighted, content, ...rest }, ref) => {
    return (
        <li ref={ref} className={classes.option} data-highlighted={highlighted} {...rest}>
            {content}
        </li>
    );
});

export default Option;
