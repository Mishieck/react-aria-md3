import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Icon } from './icon';

const meta = {
  title: 'Icon',
  component: Icon,
  tags: ['auto'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Xl: Story = {
  args: {
    name: 'check',
    size: 'xl'
  }
};

export const Lg: Story = {
  args: {
    name: 'check',
    size: 'lg'
  }
};

export const Md: Story = {
  args: {
    name: 'check',
    size: 'md'
  }
};

export const Sm: Story = {
  args: {
    name: 'check',
    size: 'sm'
  }
};

export const Xs: Story = {
  args: {
    name: 'check',
    size: 'xs'
  }
};
