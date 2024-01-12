import type { Meta, StoryObj } from '@storybook/react';
import StoryProvider from '../../providers/story';
import { Button } from './button';
import { Icon } from '../icon/icon';

const meta = {
  title: 'Example/button',
  component: Button,
  tags: [],
  argTypes: {},
  decorators: [StoryProvider]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined'
  }
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    children: 'Tonal'
  }
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text'
  }
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: 'Elevated'
  }
};

export const IconButton: Story = {
  args: {
    variant: 'filled',
    children: 'Icon',
    icon: <Icon name="check" />
  }
};
