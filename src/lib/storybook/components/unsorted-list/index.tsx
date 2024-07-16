import React, { FC, HTMLAttributes } from 'react';
import cx from 'classnames';
import classes from './styles.module.css';

interface UnsortedListProps extends HTMLAttributes<HTMLUListElement> {
    options: string[];
}

const UnsortedList: FC<UnsortedListProps> = ({ options, className, ...rest }) => {
    return (
        <ul className={cx(classes.unsortedList, className)} {...rest}>
            {options.map((option, idx) => {
                return <li key={idx}>{option}</li>;
            })}
        </ul>
    );
};

export default UnsortedList;
