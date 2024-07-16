import React, { FC, PropsWithChildren } from 'react';
import classes from '../styles.module.css';

const OptionsList: FC<PropsWithChildren> = ({ children }) => {
    return <ul className={classes.optionsList}>{children}</ul>;
};

export default OptionsList;
