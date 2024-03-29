import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import {
  NavigationBar,
  NavigationBarLink,
  NavigationBarProps
} from './navigation-bar';
import { TabPanel, Tabs } from 'react-aria-components';
import { MdIconName } from '@/types/material-icons';
import { ForEach } from '../logical/ForEach';
import { Icon } from '../icon/icon';

type NavigationLink = { icon: MdIconName; label: string; badgeLabel?: string };

const links: Array<NavigationLink> = [
  { icon: 'camera', label: 'Videos' },
  { icon: 'audio_file', label: 'Audio' },
  { icon: 'broken_image', label: 'Photos' }
];

const NavigationBarStory: React.FC<NavigationBarProps> = props => {
  return (
    <Tabs className="h-screen flex flex-col">
      <ForEach data={links}>
        {({ label }) => (
          <TabPanel
            key={label}
            id={label}
            className="p-8 flex-1 grid place-items-center"
          >
            <h1 className="text-7xl font-bold">{label}</h1>
          </TabPanel>
        )}
      </ForEach>
      <NavigationBar {...props} />
    </Tabs>
  );
};

const meta = {
  title: 'UI/NavigationBar',
  component: NavigationBarStory,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: links.map(({ icon, label }) => (
      <NavigationBarLink key={label} id={label} label={label} preventDefault>
        {({ isSelected }) => (
          <Icon name={icon} style={isSelected ? 'filled' : 'outlined'} />
        )}
      </NavigationBarLink>
    ))
  }
};
