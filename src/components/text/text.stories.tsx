import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Text } from './text';

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: 'display',
    element: 'h1',
    children: 'Text'
  }
};
