import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Elevation, ElevationProps } from './elevation';

const ElevationStory: React.FC<ElevationProps> = props => (
  <div className="p-16">
    <span className="relative rounded-2xl p-16">
      <Elevation {...props} />
    </span>
  </div>
);

const meta = {
  title: 'UI/Elevation',
  component: ElevationStory,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Elevation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level0: Story = {
  args: { level: '0' }
};

export const Level1: Story = {
  args: { level: '1' }
};

export const Level2: Story = {
  args: { level: '2' }
};

export const Level3: Story = {
  args: { level: '3' }
};

export const Level4: Story = {
  args: { level: '4' }
};

export const Level5: Story = {
  args: { level: '5' }
};
