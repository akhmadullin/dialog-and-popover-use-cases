import type { StoryObj, Meta } from '@storybook/react';
import Button from 'src/lib/storybook/components/button';
import { Menu, ItemData } from '..';
import Container from 'src/lib/storybook/components/container';
import Heading from 'src/lib/storybook/components/heading';
import Text from 'src/lib/storybook/components/text';

const meta: Meta = {
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
    render: () => {
        const menuId = 'menuId';
        const anchorName = '--menu-button-anchor';

        return (
            <Container>
                <Heading>Меню</Heading>
                <Text>Поповер также отлично ложится в UI-паттерн "меню".</Text>
                <Text>
                    Элементы меню в примере ниже не имеют под собой никакого функционала, приведены просто для
                    наглядности.
                </Text>
                <Button popovertarget={menuId} style={{ anchorName, marginLeft: '300px' }}>
                    Открыть меню
                </Button>
                <Menu id={menuId} anchorName={anchorName} items={itemsSample} ariaLabel="Actions" />
            </Container>
        );
    },
};
