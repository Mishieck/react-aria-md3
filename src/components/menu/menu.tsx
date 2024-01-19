import { cls } from '@/utils/cls';
import React from 'react';
import {
  Menu as RacMenu,
  type MenuProps as RacMenuProps,
  MenuItem as RacMenuItem,
  type MenuItemProps as RacMenuItemProps
} from 'react-aria-components';
import {
  ListItemAvatar,
  ListItemAvatarProps,
  ListItemHeadline,
  ListItemIcon,
  ListItemIconProps,
  ListItemImage,
  ListItemImageProps,
  ListItemLabel,
  ListItemLabelProps,
  ListItemSupportingText,
  ListItemSupportingTextProps,
  ListItemTrailingSupportingText,
  ListItemTrailingSupportingTextProps
} from '../list/list';

export type MenuProps = RacMenuProps<React.ReactElement>;
export type MenuItemProps = RacMenuItemProps;
export type MenuItemLabelProps = ListItemLabelProps;
export type MenuItemIconProps = ListItemIconProps;
export type MenuItemAvatarProps = ListItemAvatarProps;
export type MenuItemImageProps = ListItemImageProps;
export type MenuItemSupportingTextProps = ListItemSupportingTextProps;
export type MenuItemTrailingSupportingTextProps =
  ListItemTrailingSupportingTextProps;

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ className, ...props }, ref) => {
    return (
      <RacMenu
        ref={ref}
        className={cls(
          'rounded-[4px] overflow-hidden bg-md-sys-color-surface-container',
          className
        )}
        {...props}
      ></RacMenu>
    );
  }
);

Menu.displayName = 'Menu';

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RacMenuItem
        ref={ref}
        className={({ isSelected }) =>
          cls(
            `
              text-md-sys-color-on-surface-container
            `,
            {
              'bg-md-sys-color-surface-container': !isSelected,
              'bg-md-sys-color-secondary-container': isSelected
            },
            className
          )
        }
        {...props}
      ></RacMenuItem>
    );
  }
);

export const MenuItemLabel = ListItemLabel;
MenuItemLabel.displayName = 'MenuItemLabel';

export const MenuItemHeadline = ListItemHeadline;
MenuItemHeadline.displayName = 'MenuItemHeadline';

export const MenuItemSupportingText = ListItemSupportingText;
MenuItemSupportingText.displayName = 'MenuItemSupportingText';

export const MenuItemTrailingSupportingText = ListItemTrailingSupportingText;
MenuItemTrailingSupportingText.displayName = 'MenuItemTrailingSupportingText';

export const MenuItemIcon = ListItemIcon;
MenuItemIcon.displayName = 'MenuItemIcon';

export const MenuItemAvatar = ListItemAvatar;
MenuItemAvatar.displayName = 'MenuItemAvatar';

export const MenuItemImage = ListItemImage;
MenuItemImage.displayName = 'MenuItemImage';
