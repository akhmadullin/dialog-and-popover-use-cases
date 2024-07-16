import React, { FC, PropsWithChildren } from 'react';
import classes from '../styles.module.css';

const Container: FC<PropsWithChildren> = ({ children }) => {
    return <div className={classes.selectContainer}>{children}</div>;
};

export default Container;
