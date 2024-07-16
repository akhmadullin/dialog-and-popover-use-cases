import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import classes from '../styles.module.css';

interface SelectBoxProps {
    disabled: boolean;
    empty: boolean;
}

const SelectBox: FC<PropsWithChildren<SelectBoxProps>> = ({ disabled, empty, children, ...rest }) => {
    return (
        <button
            type="button"
            disabled={disabled}
            className={cx(classes.selectBox, { [classes.selectBoxEmpty]: empty })}
            {...rest}
        >
            {children}
        </button>
    );
};

export default SelectBox;
