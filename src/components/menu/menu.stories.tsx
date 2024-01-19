import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Menu, MenuItem, MenuProps } from './menu';
import { MenuTrigger } from 'react-aria-components';
import { Button } from '../button/button';
import { ForEach } from '../logical/ForEach';

const MenuStory: React.FC<MenuProps> = props => (
  <MenuTrigger>
    <Button>Open</Button>
    <Menu {...props} className="w-24"></Menu>
  </MenuTrigger>
);

const meta = {
  title: 'UI/Menu',
  component: MenuStory,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <ForEach data={[1, 2, 3]}>
        {num => (
          <MenuItem key={num} className="px-4 py-2">
            Item {num}
          </MenuItem>
        )}
      </ForEach>
    )
  }
};
