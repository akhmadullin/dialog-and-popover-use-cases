import React, { FC } from 'react';
import classes from './styles.module.css';

const PopoverSupportsWarning: FC = () => {
    return (
        <div className={classes.container}>
            <h3 className="mb-20">Кажется, ваш браузер не поддерживает Popover Api 😢</h3>
            <p>
                Чтобы текущая демка работала корректно, откройте её в одном из{' '}
                <a href="https://caniuse.com/mdn-api_htmlelement_popover">браузеров</a>, который поддерживает данное api
            </p>
        </div>
    );
};

export default PopoverSupportsWarning;
