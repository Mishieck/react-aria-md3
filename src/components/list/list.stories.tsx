import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemHeadline,
  ListItemIcon,
  ListItemImage,
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

export const Avatar: Story = {
  args: {
    children: (
      <ForEach data={[1, 2, 3]}>
        {num => (
          <ListItem className="px-4 py-2 flex items-center gap-4">
            <ListItemAvatar>
              <img src="src/assets/images/avatar.jpg" alt="Avatar" />
            </ListItemAvatar>
            <span>Avatar {num}</span>
          </ListItem>
        )}
      </ForEach>
    )
  }
};

export const Image: Story = {
  args: {
    children: (
      <ForEach data={[1, 2, 3]}>
        {num => (
          <ListItem className="px-4 py-2 flex items-center gap-4">
            <ListItemImage>
              <img src="src/assets/images/avatar.jpg" alt="Image" />
            </ListItemImage>
            <span>Image {num}</span>
          </ListItem>
        )}
      </ForEach>
    )
  }
};
