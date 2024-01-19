import { cls } from '@/utils/cls';
import React from 'react';
import {
  ListBox,
  type ListBoxProps,
  ListBoxItem,
  type ListBoxItemProps
} from 'react-aria-components';
import { Icon, IconProps } from '../icon/icon';
import { Text, TextProps } from '../text/text';

export type ListProps = ListBoxProps<React.ReactElement> & {};
export type ListItemType = 'text' | 'button' | 'link';

export type ListItemProps = ListBoxItemProps &
  Partial<{
    type: ListItemType;
    disabled: boolean;
  }>;

export type ListItemLabelProps = React.HTMLAttributes<HTMLSpanElement>;
export type ListItemHeadlineProps = Omit<TextProps, 'scale'>;
export type ListItemSupportingTextProps = React.HTMLAttributes<HTMLSpanElement>;

export type ListItemTrailingSupportingTextProps =
  React.HTMLAttributes<HTMLSpanElement>;

export type ListItemIconProps = Omit<IconProps, 'size'> &
  Partial<{
    leading: boolean;
    trailing: boolean;
  }>;

export type ListItemAvatarProps = React.HTMLAttributes<HTMLSpanElement> &
  Partial<{
    leading: boolean;
    trailing: boolean;
  }>;

export type ListItemImageProps = React.HTMLAttributes<HTMLSpanElement> &
  Partial<{
    leading: boolean;
    trailing: boolean;
  }>;

export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, ...props }, ref) => {
    return (
      <ListBox
        ref={ref}
        {...props}
        className={cls('bg-md-sys-color-surface', className)}
      ></ListBox>
    );
  }
);

List.displayName = 'List';

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <ListBoxItem
        ref={ref}
        className={cls('flex items-center ', className)}
        {...props}
      ></ListBoxItem>
    );
  }
);

ListItem.displayName = 'ListItem';

export const ListItemLabel = React.forwardRef<
  HTMLSpanElement,
  ListItemLabelProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      // TODO: Add 'text-md-sys-typescale-label-large-font'
      className={cls('text-md-sys-color-on-surface', className)}
      {...props}
    ></span>
  );
});

ListItemLabel.displayName = 'ListItemLabel';

export const ListItemHeadline = React.forwardRef<
  HTMLElement,
  ListItemHeadlineProps
>(({ className, ...props }, ref) => {
  return (
    <Text
      ref={ref}
      scale="headline"
      className={cls('text-md-sys-color-on-surface', className)}
      {...props}
    ></Text>
  );
});

ListItemHeadline.displayName = 'ListItemHeadline';

export const ListItemSupportingText = React.forwardRef<
  HTMLSpanElement,
  ListItemSupportingTextProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      // TODO: Add 'text-md-sys-typescale-body-medium-font'
      className={cls('text-md-sys-color-on-surface-variant', className)}
      {...props}
    ></span>
  );
});

ListItemSupportingText.displayName = 'ListItemSupportingText';

export const ListItemTrailingSupportingText = React.forwardRef<
  HTMLSpanElement,
  ListItemTrailingSupportingTextProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      // TODO: Add 'text-md-sys-typescale-label-small-font'
      className={cls('', className)}
      {...props}
    ></span>
  );
});

ListItemTrailingSupportingText.displayName = 'ListItemTrailingSupportingText';

export const ListItemIcon = React.forwardRef<
  HTMLSpanElement,
  ListItemIconProps
>(({ className, leading, trailing, ...props }, ref) => {
  return (
    <Icon
      ref={ref}
      size={leading ? 'sm' : 'md'}
      className={cls('text-md-sys-color-on-surface-variant', className)}
      {...props}
    ></Icon>
  );
});

ListItemIcon.displayName = 'ListItemIcon';

export const ListItemAvatar = React.forwardRef<
  HTMLSpanElement,
  ListItemAvatarProps
>(({ className, leading, trailing, ...props }, ref) => {
  return (
    <span
      ref={ref}
      // TODO: Add 'text-md-sys-typescale-title-medium-font'
      className={cls(
        `
          rounded-full 
          overflow-hidden
          w-[40px] aspect-square 
          bg-md-sys-color-primary-container 
          text-md-sys-color-on-primary-container
        `,
        className
      )}
      {...props}
    ></span>
  );
});

ListItemAvatar.displayName = 'ListItemAvatar';

export const ListItemImage = React.forwardRef<
  HTMLSpanElement,
  ListItemImageProps
>(({ className, leading, trailing, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cls(`w-[56px] h-[56px]`, className)}
      {...props}
    ></span>
  );
});

ListItemImage.displayName = 'ListItemImage';
