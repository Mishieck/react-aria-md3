import { cls } from '../../utils/cls';
import React from 'react';
import {
  ListBox,
  type ListBoxProps,
  ListBoxItem,
  type ListBoxItemProps
} from 'react-aria-components';
import { Icon, IconProps } from '../icon/icon';
import { Text, TextProps } from '../text/text';
import { cva } from 'class-variance-authority';
import { Any } from '../logical/Any';

export type ListProps = ListBoxProps<React.ReactElement> & {};
export type ListItemType = 'text' | 'button' | 'link';
export type ListItemLines = '1' | '2' | '3';

export type ListItemProps = Pick<ListBoxItemProps, 'children' | 'href' | 'target'> & 
  Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> &
  Partial<{
    type: ListItemType;
    lines?: ListItemLines;
    disabled: boolean;
    onClick?: (path?: string) => void;
    preventDefault?: boolean;
  }>;

export type ListItemVariantProps = {
  lines: Record<ListItemLines, string>
}

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

export const listItemVariantProps = cva<ListItemVariantProps>(
  `w-full px-[16px] flex items-center text-start`,
  {
    variants: {
      lines: {
        1: 'h-[56px]',
        2: 'h-[72px]',
        3: 'h-[88px]'
      }
    },
    defaultVariants: {
      lines: '1'
    }
  }
);

const listItemElementIndex: Record<ListItemType, number> = {
  text: 0,
  button: 1,
  link: 2
};

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ 
    type = 'text', 
    children, 
    className, 
    lines, 
    href, 
    target,
    preventDefault,
    onClick, 
    ...props
  }, ref) => {
    const handleClick: React.MouseEventHandler = (event) => {
      preventDefault && event.preventDefault();
      onClick && onClick(href);
    };

    return (
      <ListBoxItem
        ref={ref}
        {...props}
      >
        { values => {
          const childrenElement = typeof children === 'function' 
            ? children(values) 
            : children;

          return (
            <Any display={listItemElementIndex[type]}>
              <div 
                className={cls(listItemVariantProps({ lines }), className)}
                {...props}
                onClick={handleClick}
              >
                {childrenElement}
              </div>
              <button 
                className={cls(listItemVariantProps({ lines }), className)} 
                {...props}
                onClick={handleClick}
              >
                {childrenElement}
              </button>
              <a 
                href={href} 
                target={target} 
                className={cls(listItemVariantProps({ lines }), className)}
                {...props}
                onClick={handleClick}
              >
                {childrenElement}
              </a>
            </Any>
          );
        }}
      </ListBoxItem>
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
      className={cls('ms-[16px]', className)}
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
      className={
        cls(
          'text-md-sys-color-on-surface-variant',
          { 'ms-auto': trailing },
          { 'me-[16px]': leading, 'ms-[16px]': trailing },
          className
        )
      }
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
        { 'me-[16px]': leading, 'ms-[16px]': trailing },
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
      className={cls(
        `w-[56px] h-[56px]`,
        { 'me-[16px]': leading, 'ms-[16px]': trailing },
        className
      )}
      {...props}
    ></span>
  );
});

ListItemImage.displayName = 'ListItemImage';
