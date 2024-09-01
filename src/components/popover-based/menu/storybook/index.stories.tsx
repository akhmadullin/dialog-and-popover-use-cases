import type { StoryObj, Meta } from '@storybook/react';
import CenteredContentWithScroll from 'src/lib/storybook/components/centered-content-with-scroll';
import Button from 'src/lib/storybook/components/button';
import { Menu, ItemData } from '..';

const meta: Meta<typeof Menu> = {
    title: 'Popover Based/Menu',
};

export default meta;

const itemsSample: ItemData[] = [
    {
        id: 'open',
        content: 'Открыть',
    },
    {
        id: 'edit',
        content: 'Редактировать',
    },
    {
        id: 'close',
        content: 'Закрыть',
    },
    {
        id: 'more',
        content: 'Еще',
        subMenu: {
            ariaLabel: 'Еще',
            items: [
                {
                    id: 'a1',
                    content: 'Действие раз',
                },
                {
                    id: 'a2',
                    content: 'Действие два',
                    subMenu: {
                        ariaLabel: 'Действие два',
                        items: [
                            {
                                id: 'b1',
                                content: 'Поддействие раз',
                            },
                            {
                                id: 'b2',
                                content: 'Поддействие два',
                            },
                            {
                                id: 'b3',
                                content: 'Поддействие три',
                            },
                        ],
                    },
                },
                {
                    id: 'a3',
                    content: 'Действие три',
                },
            ],
        },
    },
];

export const MenuStory: StoryObj<typeof meta> = {
    args: {
        items: itemsSample,
        ariaLabel: 'Действия',
    },
    argTypes: {
        items: {
            control: 'object',
        },
        ariaLabel: {
            control: 'text',
        },
    },
    render: () => {
        const menuId = 'menuId';
        const anchorName = '--menu-button-anchor';

        return (
            <CenteredContentWithScroll>
                <Button popovertarget={menuId} style={{ anchorName }}>
                    Открыть меню
                </Button>
                <Menu id={menuId} anchorName={anchorName} items={itemsSample} ariaLabel="Действия" />
            </CenteredContentWithScroll>
        );
    },
};
