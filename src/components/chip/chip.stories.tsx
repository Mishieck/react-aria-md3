import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Chip } from './chip';

const meta = {
  title: 'Chip',
  component: Chip,
  tags: ['auto'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Assist: Story = {
  args: {
    chipRole: 'assist',
    label: 'Assist'
  }
};

export const Filter: Story = {
  args: {
    chipRole: 'filter',
    label: 'Filter'
  }
};

export const Input: Story = {
  args: {
    chipRole: 'input',
    label: 'Input'
  }
};

export const Suggestion: Story = {
  args: {
    chipRole: 'suggestion',
    label: 'Suggestion'
  }
};

export const WithIcon: Story = {
  args: {
    chipRole: 'assist',
    label: 'Icon',
    icon: 'check'
  }
};

export const WithAvatar: Story = {
  args: {
    chipRole: 'assist',
    label: 'Avatar',
    hasAvatar: true,
    children: <img src="src/assets/images/avatar.jpg" alt="Avatar" />
  }
};
