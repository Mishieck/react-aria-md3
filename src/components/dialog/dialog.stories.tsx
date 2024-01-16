import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import {
  Dialog,
  DialogAction,
  DialogActions,
  DialogContent,
  DialogHeadline,
  DialogProps
} from './dialog';
import { Button } from '../button/button';
import { DialogTrigger } from 'react-aria-components';

const DialogStory: React.FC<DialogProps> = props => (
  <DialogTrigger>
    <Button>Open</Button>
    <Dialog {...props}></Dialog>
  </DialogTrigger>
);

const meta = {
  title: 'UI/Dialog',
  component: DialogStory,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ({ close }) => (
      <>
        <DialogHeadline>Headline</DialogHeadline>
        <DialogContent>Content</DialogContent>
        <DialogActions>
          <DialogAction onPress={close}>Cancel</DialogAction>
          <DialogAction onPress={close}>OK</DialogAction>
        </DialogActions>
      </>
    )
  }
};
