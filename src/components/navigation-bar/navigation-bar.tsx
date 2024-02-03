import { cls } from '../../utils/cls';
import React from 'react';
import {
  Tab,
  TabList,
  TabProps,
  type TabListProps
} from 'react-aria-components';
import { Maybe } from '../logical/Maybe';
import { elevationVariantProps } from '../elevation/elevation';

export type NavigationBarProps = TabListProps<React.ReactElement>;

export type NavigationBarLinkProps = TabProps & {
  label: string;
  badgeLabel?: string;
  path?: string;
  preventDefault?: boolean;
  onNavigate?: (path?: string) => void;
};


export type NavigationBarLinkContentProps = Pick<
  NavigationBarLinkProps, 
  'label' | 'badgeLabel' 
> & { children?: React.ReactNode; isSelected: boolean; isHovered: boolean };

export const NavigationBar = React.forwardRef<
  HTMLDivElement,
  NavigationBarProps
>(({ className, children, ...props }, ref) => {
  return (
    <TabList
      ref={ref}
      className={cls(
        `
          h-[80px]
          flex justify-between items-end
          scroll-smooth
          bg-md-sys-color-surface-container
          text-md-sys-color-on-surface-container
        `,
        elevationVariantProps({ level: '2' }),
        className
      )}
      style={{ scrollbarWidth: 'none' }}
      {...props}
    >
      {children}
    </TabList>
  );
});

NavigationBar.displayName = 'NavigationBar';

export const NavigationBarLinkContent = React.forwardRef<
  HTMLDivElement,
  NavigationBarLinkContentProps
>(({ label, badgeLabel, children, isSelected, isHovered }, ref) => {
  return (
    <div ref={ref}
      className="
        w-fit md:w-32 
        px-0 py-4 
        flex flex-col items-center justify-center gap-1
      "
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
          isSelected || isHovered
          }
        )}
      >
        {children}
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
      <span
        className="
          text-xs text-md-sys-color-on-background leading-tight tracking-[.0416em]
        "
      >
        {label}
      </span>
    </div>
  );
});

NavigationBarLinkContent.displayName = 'NavigationBarLinkContent';

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
          >
            <NavigationBarLinkContent
              label={label}
              isSelected={values.isSelected}
              isHovered={values.isHovered}
            >
              {typeof children === 'function' ? children(values) : children}
            </NavigationBarLinkContent>
          </a>
        )}
      </Tab>
    );
  }
);

NavigationBarLink.displayName = 'NavigationBarLink';
