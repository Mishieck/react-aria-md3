import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['auto'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default'
  }
};

export const Selected: Story = {
  args: {
    isSelected: true,
    children: 'Selected'
  }
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
    children: 'Indeterminate'
  }
};
