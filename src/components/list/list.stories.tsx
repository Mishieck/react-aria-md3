import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import {
  List,
  ListItem,
  ListItemHeadline,
  ListItemIcon,
  ListItemLabel,
  ListItemSupportingText,
  ListItemTrailingSupportingText
} from './list';
import { ForEach } from '../logical/ForEach';

const meta = {
  title: 'UI/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    children: (
      <ForEach data={[1, 2, 3]}>
        {num => (
          <ListItem>
            <ListItemLabel key={num}>List Item Label {num}</ListItemLabel>
          </ListItem>
        )}
      </ForEach>
    )
  }
};

export const LeadingIcon: Story = {
  args: {
    children: (
      <ForEach data={[1, 2, 3]}>
        {num => (
          <ListItem className="flex items-center gap-4">
            <ListItemIcon name="check" leading></ListItemIcon>
            <span>Leading Icon {num}</span>
          </ListItem>
        )}
      </ForEach>
    )
  }
};

export const TrailingIcon: Story = {
  args: {
    children: (
      <ForEach data={[1, 2, 3]}>
        {num => (
          <ListItem className="flex items-center gap-4">
            <span>Trailing Icon {num}</span>
            <ListItemIcon name="check" trailing></ListItemIcon>
          </ListItem>
        )}
      </ForEach>
    )
  }
};

export const TrailingSupportingText: Story = {
  args: {
    children: (
      <ForEach data={[1, 2, 3]}>
        {num => (
          <ListItem className="gap-4">
            <div className="flex flex-col">
              <ListItemHeadline>Headline</ListItemHeadline>
              <ListItemSupportingText>
                Leading Icon {num}
              </ListItemSupportingText>
            </div>
            <ListItemTrailingSupportingText>TST</ListItemTrailingSupportingText>
          </ListItem>
        )}
      </ForEach>
    )
  }
};
