import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import {
  TopAppBar,
  TopAppBarButton,
  TopAppBarHeadline,
  TopAppBarToolbar
} from './top-app-bar';
import { Icon } from '../icon/icon';

const meta = {
  title: 'UI/TopAppBar',
  component: TopAppBar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof TopAppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TopAppBarButton>
          <Icon name="menu" />
        </TopAppBarButton>
        <TopAppBarHeadline>Top App Bar</TopAppBarHeadline>
        <TopAppBarToolbar>
          <TopAppBarButton>
            <Icon name="notifications" />
          </TopAppBarButton>
          <TopAppBarButton avatar>
            <img src="src/assets/images/avatar.jpg" alt="Avatar" />
          </TopAppBarButton>
        </TopAppBarToolbar>
      </>
    )
  }
};
