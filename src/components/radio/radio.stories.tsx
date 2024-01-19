import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Radio, RadioGroup, RadioProps } from './radio';
import { ForEach } from '../logical/ForEach';

const RadioStory: React.FC<RadioProps> = ({
  value,
  children,
  className,
  ...props
}) => (
  <RadioGroup defaultValue={`${value}-1`}>
    <ForEach data={[1, 2, 3]}>
      {num => (
        <Radio
          key={num}
          value={`${value}-${num.toString()}`}
          {...props}
        >{`${children} ${num.toString()}`}</Radio>
      )}
    </ForEach>
  </RadioGroup>
);

const meta = {
  title: 'UI/Radio',
  component: RadioStory,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'default',
    children: 'Default'
  }
};
