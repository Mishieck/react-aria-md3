import type { Meta, StoryObj } from '@storybook/react';
import StoryDecorator from '@/providers/story';
import {
  Tabs,
  Tab,
  TabIcon,
  TabLabel,
  TabPanel,
  TabList,
  TabListProps
} from './tabs';
import { MdIconName } from '@/types/material-icons';
import { ForEach } from '../logical/ForEach';
import { cls } from '@/utils/cls';

type Tab = {
  icon: MdIconName;
  label: string;
};

const tabs: Array<Tab> = [
  { icon: 'camera', label: 'Video' },
  { icon: 'broken_image', label: 'Photos' },
  { icon: 'audio_file', label: 'Audio' }
];

const TabsStory: React.FC<TabListProps> = ({ className, ...props }) => {
  return (
    <Tabs>
      <TabList className={cls('', className)} {...props} />
      <ForEach data={tabs}>
        {({ label }) => (
          <TabPanel
            key={label}
            id={label}
            className="p-8 grid place-items-center"
          >
            <h1 className="capitalize text-9xl font-bold">{label}</h1>
          </TabPanel>
        )}
      </ForEach>
    </Tabs>
  );
};

const meta = {
  title: 'UI/Tabs',
  component: TabsStory,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoryDecorator]
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: tabs.map(({ label }) => (
      <Tab key={label} id={label}>
        <TabLabel>{label}</TabLabel>
      </Tab>
    ))
  }
};

export const WithIcons: Story = {
  args: {
    children: tabs.map(({ icon, label }) => (
      <Tab key={label} id={label}>
        {({ isSelected }) => (
          <>
            <TabIcon
              name={icon}
              isSelected={isSelected}
              style={isSelected ? 'filled' : 'outlined'}
            />
            <TabLabel>{label}</TabLabel>
          </>
        )}
      </Tab>
    ))
  }
};
