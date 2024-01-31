import React from 'react';
import { Button, ButtonProps } from 'react-aria-components';
import { cls } from '../../utils/cls';
import { Maybe } from '../logical/Maybe';
import { Either } from '../logical/Either';
import { Text, TextProps } from '../text/text';

export type TopAppBarProps = React.HTMLAttributes<HTMLDivElement>;

export type TopAppBarButtonProps = ButtonProps &
  Partial<{ avatar: boolean; badgeText: string }>;

export type TopAppBarHeadlineProps = TextProps;
export type TopAppBarToolbarProps = React.HTMLAttributes<HTMLDivElement>;

export const TopAppBar = React.forwardRef<HTMLDivElement, TopAppBarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cls(
          `w-full h-16 flex flex-row items-center justify-between gap-1.5`,
          className
        )}
        {...props}
      ></div>
    );
  }
);

TopAppBar.displayName = 'TopAppBar';

export const TopAppBarHeadline = React.forwardRef<
  HTMLElement,
  TopAppBarHeadlineProps
>((props, ref) => {
  return <Text ref={ref} scale="headline" {...props} />;
});

TopAppBarHeadline.displayName = 'TopAppBarHeadline';

export const TopAppBarButton = React.forwardRef<
  HTMLButtonElement,
  TopAppBarButtonProps
>(({ className, children, badgeText, avatar = false, ...props }, ref) => {
  const child = typeof children === 'function' ? children : () => children;

  return (
    <Button
      ref={ref}
      className={cls(
        `
          relative 
          rounded-[6.25rem] 
          w-12 h-12 
          !inline-flex !items-center justify-center gap-x-2 
          text-sm tracking-[.00714em] text-center font-medium
        `,
        className
      )}
      {...props}
    >
      {values => (
        <>
          <Either displayFirst={avatar}>
            <span className="rounded-full overflow-hidden w-8 aspect-square">
              {child(values)}
            </span>
            {child(values)}
          </Either>
          <Maybe display={!!badgeText}>
            <div className="absolute top-2 right-2 w-4 h-4 flex items-center justify-center rounded-full text-[11px] leading-none tracking-[.045em] font-medium bg-error-600 dark:bg-error-200 text-white dark:text-error-800">
              {badgeText}
            </div>
          </Maybe>
        </>
      )}
    </Button>
  );
});

TopAppBarButton.displayName = 'TopAppBarButton';

export const TopAppBarToolbar = React.forwardRef<
  HTMLDivElement,
  TopAppBarToolbarProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cls(`flex flex-row justify-end items-center`, className)}
      {...props}
    ></div>
  );
});
