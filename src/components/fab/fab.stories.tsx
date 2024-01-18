import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import { Fab, FabIcon, FabLabel } from './fab';
import { Icon } from '../icon/icon';

const meta = {
  title: 'UI/Fab',
  component: Fab,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <FabIcon name="check" />
  }
};

export const Extended: Story = {
  args: {
    extended: true,
    hasIcon: false,
    children: (
      <>
        <FabLabel extended>Extended</FabLabel>
      </>
    )
  }
};

export const ExtendedWithIcon: Story = {
  args: {
    extended: true,
    children: (
      <>
        <FabIcon name="check" extended />
        <FabLabel extended>Extended</FabLabel>
      </>
    )
  }
};

export const Branded: Story = {
  args: {
    branded: true,
    children: <FabIcon name="check" branded />
  }
};

export const BrandedExtended: Story = {
  args: {
    branded: true,
    extended: true,
    children: (
      <>
        <FabIcon name="check" branded extended />
        <FabLabel branded extended>
          Branded
        </FabLabel>
      </>
    )
  }
};

export const Small: Story = {
  args: {
    children: <FabIcon name="check" size="small" />,
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    children: <FabIcon name="check" size="large" />,
    size: 'large'
  }
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: <FabIcon name="check" />
  }
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: <FabIcon name="check" />
  }
};

export const Tertiary: Story = {
  args: {
    color: 'tertiary',
    children: <FabIcon name="check" />
  }
};
