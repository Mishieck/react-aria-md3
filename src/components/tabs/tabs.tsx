import React from 'react';
import {
  Tabs as RacTabs,
  Tab as RacTab,
  TabList as RacTabList,
  TabPanel as RacTabPanel,
  type TabsProps as RacTabsProps,
  type TabProps as RacTabProps,
  type TabListProps as RacTabListProps,
  type TabPanelProps as RacTabPanelProps
} from 'react-aria-components';
import { Icon, IconProps } from '../icon/icon';
import { cls } from '@/utils/cls';
import { Maybe } from '../logical/Maybe';

export type TabsProps = RacTabsProps;
export type TabListProps = RacTabListProps<React.ReactElement>;
export type TabProps = RacTabProps & {};
export type TabIconProps = IconProps & { isSelected?: boolean };
export type TabLabelProps = React.HTMLAttributes<HTMLSpanElement>;
export type TabPanelProps = RacTabPanelProps;

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, ...props }, ref) => {
    return <RacTabs ref={ref} className={cls('', className)} {...props} />;
  }
);

Tabs.displayName = 'Tabs';

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className, ...props }, ref) => {
    return (
      <RacTabList
        ref={ref}
        className={cls(
          `
            border-b
            overflow-auto
            flex justify-between items-end
            scroll-smooth
          `,
          className
        )}
        style={{ scrollbarWidth: 'none' }}
        {...props}
      />
    );
  }
);

TabList.displayName = 'TabList';

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <RacTab
        ref={ref}
        className={cls(
          `
            relative
            outline-none px-[16px] py-0 
            inline-flex flex-col items-center 
            bg-md-sys-color-surface 
            rac-selected:text-md-sys-color-primary
            align-middle
            select-none
          `,
          className
        )}
        style={{ WebkitTapHighlightColor: 'transparent' }}
        {...props}
      >
        {values => (
          <>
            <div className="mb-3 inline-flex flex-col justify-center items-center gap-1">
              {typeof children === 'function' ? children(values) : children}
            </div>
            <Maybe display={values.isSelected}>
              <div className="absolute bottom-0 w-full h-[4px] p-[inherit]">
                <div className="rounded-t-full w-full h-full bg-current"></div>
              </div>
            </Maybe>
          </>
        )}
      </RacTab>
    );
  }
);

Tab.displayName = 'Tab';

export const TabIcon = React.forwardRef<HTMLSpanElement, TabIconProps>(
  ({ className, isSelected, ...props }, ref) => {
    return (
      <Icon
        ref={ref}
        className={cls(
          'text-md-sys-color-on-surface-variant',
          { 'text-inherit': isSelected },
          className
        )}
        {...props}
      />
    );
  }
);

TabIcon.displayName = 'TabIcon';

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className, ...props }, ref) => {
    return <RacTabPanel ref={ref} className={cls('', className)} {...props} />;
  }
);

TabPanel.displayName = 'TabPanel';

export const TabLabel = React.forwardRef<HTMLSpanElement, TabLabelProps>(
  ({ className, ...props }, ref) => {
    return <span ref={ref} className={cls('', className)} {...props} />;
  }
);

TabLabel.displayName = 'TabLabel';
