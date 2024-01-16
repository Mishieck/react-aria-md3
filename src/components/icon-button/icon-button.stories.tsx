import type { Meta, StoryObj } from '@storybook/react';
import StoryProvider from '../../providers/story';
import { IconButton } from './icon-button';
import { Icon } from '../icon/icon';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  tags: [],
  argTypes: {},
  decorators: [StoryProvider]
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    container: 'default',
    icon: 'check'
  }
};

export const Filled: Story = {
  args: {
    container: 'filled',
    icon: 'check'
  }
};

export const Outlined: Story = {
  args: {
    container: 'outlined',
    icon: 'check'
  }
};

export const Tonal: Story = {
  args: {
    container: 'tonal',
    icon: 'check'
  }
};

export const WithChildIcon: Story = {
  args: {
    container: 'default',
    children: <Icon name="check" />
  }
};
