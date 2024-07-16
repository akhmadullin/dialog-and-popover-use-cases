import React, { PropsWithChildren, forwardRef } from 'react';
import cx from 'classnames';
import classes from '../styles.module.css';
import { MenuItemProps } from '../types';

const getMenuOptionData = (subMenuId: string | undefined, anchorName: string | undefined) => {
    if (!subMenuId) {
        return {};
    }

    return {
        liData: {
            style: { anchorName },
        },
        buttonData: {
            'aria-haspopup': true,
            'aria-expanded': false,
            popovertarget: subMenuId,
        },
    };
};

const MenuItem = forwardRef<HTMLButtonElement, PropsWithChildren<MenuItemProps>>(
    ({ subMenu, subMenuId, anchorName, children, ...rest }, ref) => {
        const { liData, buttonData } = getMenuOptionData(subMenuId, anchorName);
        return (
            <li role="none" {...liData} className={classes.menuOption}>
                <button
                    ref={ref}
                    type="button"
                    role="menuitem"
                    tabIndex={-1}
                    {...buttonData}
                    className={cx(classes.menuOptionButton, { [classes.menuOptionButtonWithSubMenu]: subMenuId })}
                    {...rest}
                >
                    {children}
                </button>
                {subMenu}
            </li>
        );
    }
);

export default MenuItem;
