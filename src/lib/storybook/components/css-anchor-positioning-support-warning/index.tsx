import React, { FC } from 'react';
import classes from './styles.module.css';

const CssAnchorPositioningSupportsWarning: FC = () => {
    return (
        <div className={classes.container}>
            <h3 className="mb-20">Кажется, ваш браузер не поддерживает CSS Anchor Positioning 😢</h3>
            <p>
                Чтобы текущая демка работала корректно, откройте её в одном из{' '}
                <a href="https://caniuse.com/css-anchor-positioning">браузеров</a>, который поддерживает данное api
            </p>
        </div>
    );
};

export default CssAnchorPositioningSupportsWarning;
