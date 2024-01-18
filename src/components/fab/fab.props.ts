import { cva } from 'class-variance-authority';
import { SizeLong, SizeShort } from '@/types/size';
import React from 'react';
import { ButtonProps } from 'react-aria-components';
import { ElevationLevel } from '../elevation/elevation';
import { IconProps, iconSizeStyles } from '../icon/icon';

export type FabVariant = 'default' | 'extended' | 'branded';
export type FabColor = 'surface' | 'primary' | 'secondary' | 'tertiary';

export type FabVariantBooleanProps = Record<
  'extended' | 'branded' | 'lowered' | 'hasIcon',
  boolean
>;

export type FabVariantProps = {
  size: Record<SizeLong, string>;
  color: Record<FabColor, string>;
};

export type FabIconVariantProps = {
  variant: Record<FabVariant, string>;
  size: Record<SizeLong, string>;
  color: Record<FabColor, string>;
};

export type FabLabelVariantProps = {
  size: Record<SizeLong, string>;
};

export type FabProps = ButtonProps &
  Partial<{
    size: SizeLong;
    color: FabColor;
    children: React.ReactNode;
    extended: boolean;
    branded: boolean;
    lowered: boolean;
    hasIcon: boolean;
    noTouchTarget: boolean;
  }>;

export type FabIconProps = Omit<IconProps, 'size'> &
  Pick<FabProps, 'size' | 'color' | 'extended' | 'branded'>;

export type FabLabelProps = Pick<
  FabProps,
  'size' | 'color' | 'extended' | 'branded' | 'children'
>;

export const fabVariantProps = ({
  extended,
  branded,
  hasIcon
}: FabVariantBooleanProps) =>
  cva<FabVariantProps>(
    `
      relative 
      z-0
      border-0
      outline-none
      p-0 
      inline-flex justify-center items-center 
      align-middle
      transition-[background-color]
      cursor-pointer
    `,
    {
      variants: {
        size: {
          small: `rounded-xl p-[16px]  ${
            extended && hasIcon && 'ps-[12px] gap-2'
          }`,
          medium: `rounded-2xl p-[20px] ${
            extended && hasIcon && 'ps-[16px] gap-4'
          }`,
          large: `rounded-[28px] p-[24px]  ${
            extended && hasIcon && 'ps-[20px] gap-6'
          }`
        },
        color: {
          // TODO: Use 'bg-md-sys-color-surface-container-high' instead
          surface: 'bg-md-sys-color-surface text-md-sys-color-on-surface',
          primary: 'bg-md-sys-color-primary text-md-sys-color-on-primary',
          secondary: 'bg-md-sys-color-secondary text-md-sys-color-on-secondary',
          tertiary: 'bg-md-sys-color-tertiary text-md-sys-color-on-tertiary'
        }
      }
    }
  );

export const fabIconVariantProps = ({}: FabVariantBooleanProps) =>
  cva<FabVariantProps>(
    `
    
  `,
    {
      variants: {
        size: {
          small: iconSizeStyles.sm,
          medium: iconSizeStyles.md,
          large: iconSizeStyles.lg
        },
        color: {
          surface: '',
          primary: '',
          secondary: '',
          tertiary: ''
        }
      }
    }
  );

export const fabLabelVariantProps = ({}: FabVariantBooleanProps) =>
  cva<FabVariantProps>(`overflow-hidden text-ellipsis whitespace-nowrap`, {
    variants: {
      size: {
        small: '',
        medium: '',
        large: ''
      },
      color: {
        surface: '',
        primary: '',
        secondary: '',
        tertiary: ''
      }
    }
  });

export type FabElevationLevels = Record<SizeLong, ElevationLevel>;

export const fabElevationLevels: FabElevationLevels = {
  small: '2',
  medium: '3',
  large: '4'
};

export const fabStateElevationLevels: FabElevationLevels = Object.entries(
  fabElevationLevels
).reduce(
  (levels, [property, value]) => ({
    ...levels,
    [property]: String(Number(value) + 1)
  }),
  {} as FabElevationLevels
);

export const fabIconSizes: Record<SizeLong, Exclude<SizeShort, 'xs' | 'xl'>> = {
  small: 'sm',
  medium: 'md',
  large: 'lg'
};
