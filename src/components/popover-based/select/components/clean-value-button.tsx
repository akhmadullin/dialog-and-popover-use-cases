import React, { ReactElement, forwardRef } from 'react';
import classes from '../styles.module.css';

interface CleanValueButtonProps {
    highlighted: boolean;
    content: ReactElement | string;
}

const CleanValueButton = forwardRef<HTMLButtonElement, CleanValueButtonProps>(
    ({ highlighted, content, ...rest }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                tabIndex={-1}
                {...rest}
                data-highlighted={highlighted}
                className={classes.cleanValueButton}
            >
                {content}
            </button>
        );
    }
);

export default CleanValueButton;
