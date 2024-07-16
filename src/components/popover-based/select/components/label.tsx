import React, { FC, PropsWithChildren } from 'react';
import classes from '../styles.module.css';

const Label: FC<PropsWithChildren> = ({ children }) => {
    return <div className={classes.label}>{children}</div>;
};

export default Label;
