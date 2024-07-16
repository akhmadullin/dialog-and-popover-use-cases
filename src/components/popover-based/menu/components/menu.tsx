import React, { FC, useRef, useLayoutEffect, KeyboardEventHandler } from 'react';
import cx from 'classnames';
import classes from '../styles.module.css';
import useRefMap from '../hooks/use-ref-map';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ESCAPE, TAB } from '../constants/keys';
import MenuItem from './menu-item';
import { MenuInternalProps, MenuProps, SubMenuData } from '../types';

const getSubMenuData = (menuId: string, subMenu: SubMenuData | undefined) => {
    if (!subMenu) {
        return {};
    }

    const subMenuId = `${menuId}-submenu`;
    const subMenuButtonAnchorName = `--submenu-button-${menuId}`;
    const subMenuElement = (
        <MenuIternal
            id={subMenuId}
            anchorName={subMenuButtonAnchorName}
            items={subMenu.items}
            ariaLabel={subMenu.ariaLabel}
            isSubMenu
        />
    );

    return { subMenuElement, subMenuId, subMenuButtonAnchorName };
};

const step = 1;

const MenuIternal: FC<MenuInternalProps> = ({ id, anchorName, items, isSubMenu, ariaLabel }) => {
    const menuRef = useRef<HTMLUListElement | null>(null);
    const [menuItemsRef, collector] = useRefMap<HTMLButtonElement>();

    const itemsPrepared = items.map((data, idx) => {
        return {
            ...data,
            idx,
            'data-idx': idx,
        };
    });

    useLayoutEffect(() => {
        const focusFirstItem = (event) => {
            if (event.newState === 'open') {
                const firstOption = menuItemsRef.current[0];
                firstOption.focus();
            }
        };

        menuRef.current?.addEventListener('toggle', focusFirstItem);

        return () => {
            menuRef.current?.removeEventListener('toggle', focusFirstItem);
        };
    }, [menuItemsRef]);

    useLayoutEffect(() => {
        if (!isSubMenu) {
            return;
        }

        const updateAriaExpanded = (event) => {
            if (event.newState === 'open') {
                menuRef.current?.previousSibling?.setAttribute('aria-expanded', true);
            } else {
                menuRef.current?.previousSibling?.setAttribute('aria-expanded', false);
            }
        };

        menuRef.current?.addEventListener('beforetoggle', updateAriaExpanded);

        return () => {
            if (!isSubMenu) {
                return;
            }

            menuRef.current?.removeEventListener('beforetoggle', updateAriaExpanded);
        };
    }, [isSubMenu]);

    const onMenuKeyDown: KeyboardEventHandler = (event) => {
        if (event.keyCode === TAB) {
            menuRef.current?.hidePopover();
        }
    };

    const onItemKeyDown: KeyboardEventHandler = (event) => {
        const menuItem = event.target as HTMLButtonElement;

        switch (event.keyCode) {
            case ARROW_DOWN: {
                event.preventDefault();
                const idx = Number(menuItem.dataset.idx);

                let newIndex = idx === 0 ? 1 : idx + step;

                if (newIndex >= itemsPrepared.length) {
                    newIndex = 0;
                }

                const nextItem = menuItemsRef.current[newIndex];
                nextItem.focus();
                break;
            }
            case ARROW_UP: {
                event.preventDefault();
                const idx = Number(menuItem.dataset.idx);

                let newIndex = idx - step;

                if (newIndex < 0) {
                    newIndex = itemsPrepared.length - 1;
                }

                const nextItem = menuItemsRef.current[newIndex];
                nextItem.focus();
                break;
            }
            case ARROW_LEFT:
            case ARROW_RIGHT: {
                event.preventDefault();

                // если делать без адаптивного css anchor position, то подход с навигацией на боковые стрелки ок
                // с адаптивным css anchor position надо понимать с какой стороны у нас весит меню,
                // что понять, что именно хочет применить пользователь на свое действие
                // const idx = Number(menuOption.dataset.idx);
                // if (optionsPrepared[idx].options === undefined) {
                //     menuRef.current?.hidePopover();
                //     menuOption.parentNode?.previousSibling?.focus();
                //     return;
                // }
                // menuOption.click();

                break;
            }

            case ESCAPE: {
                if (!isSubMenu) {
                    return;
                }

                menuItem.parentNode?.parentNode?.previousSibling?.focus();

                break;
            }
            default:
        }
    };

    return (
        <ul
            ref={menuRef}
            id={id}
            role="menu"
            aria-label={ariaLabel}
            popover="auto"
            onKeyDown={onMenuKeyDown}
            className={cx(classes.menu, { [classes.menuSubMenu]: isSubMenu })}
            style={{ '--menu-button-anchor-name': anchorName }}
        >
            {itemsPrepared.map(({ id, content, subMenu, idx, action, ...rest }) => {
                const { subMenuElement, subMenuId, subMenuButtonAnchorName } = getSubMenuData(id, subMenu);
                return (
                    <MenuItem
                        key={id}
                        ref={(ref: HTMLButtonElement | null) => {
                            collector(idx, ref);
                        }}
                        onKeyDown={onItemKeyDown}
                        onClick={action}
                        subMenu={subMenuElement}
                        subMenuId={subMenuId}
                        anchorName={subMenuButtonAnchorName}
                        {...rest}
                    >
                        {content}
                    </MenuItem>
                );
            })}
        </ul>
    );
};

const Menu: FC<MenuProps> = (props) => {
    return <MenuIternal {...props} />;
};

export default Menu;
