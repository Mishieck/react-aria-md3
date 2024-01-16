import type { Meta, StoryObj } from '@storybook/react';
import StoryProvider from '../../providers/story';
import { Button } from './button';
import { Icon } from '../icon/icon';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryProvider]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    container: 'filled',
    children: 'Filled'
  }
};

export const Outlined: Story = {
  args: {
    container: 'outlined',
    children: 'Outlined'
  }
};

export const Tonal: Story = {
  args: {
    container: 'tonal',
    children: 'Tonal'
  }
};

export const Text: Story = {
  args: {
    container: 'text',
    children: 'Text'
  }
};

export const Elevated: Story = {
  args: {
    container: 'elevated',
    children: 'Elevated'
  }
};

export const IconButton: Story = {
  args: {
    container: 'filled',
    hasIcon: true,
    children: (
      <>
        <Icon name="check" />
        <span>With Icon</span>
      </>
    )
  }
};
