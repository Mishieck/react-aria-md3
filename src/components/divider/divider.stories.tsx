import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Divider } from './divider';

const meta = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Inset: Story = {
  args: {
    inset: 'both'
  }
};

export const InsetStart: Story = {
  args: {
    inset: 'start'
  }
};

export const InsetEnd: Story = {
  args: {
    inset: 'end'
  }
};
