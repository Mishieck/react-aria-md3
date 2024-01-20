import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Slider, SliderIcon } from './slider';

const meta = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Value: Story = {
  args: {}
};
