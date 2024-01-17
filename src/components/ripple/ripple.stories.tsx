import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Ripple, RippleProps } from './ripple';

const RippleStory: React.FC<RippleProps> = props => (
  <div className="relative w-36 aspect-square border rounded-2xl">
    <Ripple {...props} />
  </div>
);

const meta = {
  title: 'UI/Ripple',
  component: RippleStory,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Ripple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Unbounded: Story = {
  args: {
    unbounded: true
  }
};
