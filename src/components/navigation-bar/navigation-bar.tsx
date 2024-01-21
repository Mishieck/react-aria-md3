import { cls } from '@/utils/cls';
import React from 'react';
import {
  Tab,
  TabList,
  TabProps,
  type TabListProps
} from 'react-aria-components';
import { Maybe } from '../logical/Maybe';

export type NavigationBarProps = TabListProps<React.ReactElement>;

export type NavigationBarLinkProps = TabProps & {
  label: string;
  badgeLabel?: string;
  path?: string;
  preventDefault?: boolean;
  onNavigate?: (path?: string) => void;
};

export const NavigationBar = React.forwardRef<
  HTMLDivElement,
  NavigationBarProps
>(({ className, ...props }, ref) => {
  return (
    <TabList
      ref={ref}
      className={cls(
        `
          flex justify-between items-end
          scroll-smooth
        `,
        className
      )}
      style={{ scrollbarWidth: 'none' }}
      {...props}
    />
  );
});

NavigationBar.displayName = 'NavigationBar';

export const NavigationBarLink = React.forwardRef<
  HTMLDivElement,
  NavigationBarLinkProps
>(
  (
    { label, badgeLabel, children, path, preventDefault, onNavigate, ...props },
    ref
  ) => {
    const handleNavigate: React.MouseEventHandler = event => {
      preventDefault && event.preventDefault();
      onNavigate?.(path);
    };

    return (
      <Tab ref={ref} className={cls(`flex justify-between`)} {...props}>
        {values => (
          <a
            href={path ?? '#'}
            onClick={handleNavigate}
            className="group flex w-fit md:w-32 flex-col items-center justify-center px-0 py-4 gap-1"
          >
            <div
              className={cls(
                `
                relative 
                rounded-full 
                w-16 h-8 
                flex items-center justify-center
              `,
                {
                  'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container':
                    values.isSelected || values.isHovered
                }
              )}
            >
              {typeof children === 'function' ? children(values) : children}
              <Maybe display={!!badgeLabel}>
                <div
                  className="
                  absolute top-0 left-8 
                  rounded-full 
                  min-w-[22px] h-4
                  px-1 
                  flex items-center justify-center 
                  bg-md-sys-color-error 
                  text-[11px] leading-none tracking-[.045em] font-medium 
                  text-md-sys-color-on-error
                "
                >
                  {badgeLabel}
                </div>
              </Maybe>
            </div>
            <span className="text-xs text-neutral-900 dark:text-neutral-100 leading-tight tracking-[.0416em]">
              {label}
            </span>
          </a>
        )}
      </Tab>
    );
  }
);

NavigationBarLink.displayName = 'NavigationBarLink';
