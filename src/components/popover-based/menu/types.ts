import { KeyboardEventHandler, MouseEventHandler, ReactElement } from 'react';

export type ItemData = {
    id: string;
    content: ReactElement | string;
} & (
    | {
          action?: () => void;
          subMenu?: never;
      }
    | {
          action?: never;
          subMenu?: SubMenuData;
      }
);

export interface MenuItemProps {
    subMenu?: ReactElement;
    subMenuId?: string;
    anchorName?: string;
    onKeyDown: KeyboardEventHandler;
    onClick?: MouseEventHandler;
}

export interface SubMenuData {
    ariaLabel?: string;
    items: ItemData[];
}

export interface MenuInternalProps {
    id: string;
    anchorName: string;
    items: ItemData[];
    isSubMenu?: boolean;
    ariaLabel?: string;
}

export type MenuProps = Omit<MenuInternalProps, 'isSubMenu'>;
