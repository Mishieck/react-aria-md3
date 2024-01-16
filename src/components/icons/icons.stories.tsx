import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Icons } from './icons';

const meta = {
  title: 'Assets/Icons',
  component: Icons,
  tags: [],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
