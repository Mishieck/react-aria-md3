import { MdIconName } from '../../types/material-icons';
import { SizeShort } from '../../types/size';
import { cls } from '../../utils/cls';
import { cva } from 'class-variance-authority';
import React from 'react';

export type IconStyle = 'filled' | 'outlined' | 'sharp';

export type IconProps = {
  name?: MdIconName;
  style?: IconStyle;
  size?: SizeShort;
  children?: React.ReactNode;
  className?: string;
};

export type IconVariantProps = {
  style: Record<IconStyle, string>;
  size: Record<SizeShort, string>;
};

export const iconSizeStyles: IconVariantProps['size'] = {
  xl: '!text-[40px]',
  lg: '!text-[32px]',
  md: '!text-[24px]',
  sm: '!text-[18px]',
  xs: '!text-[12px]'
};

const iconVariantProps = cva<IconVariantProps>('', {
  variants: {
    style: {
      filled: 'material-icons-filled',
      outlined: 'material-icons-outlined',
      sharp: 'material-icons-sharp'
    },
    size: iconSizeStyles
  },
  defaultVariants: {
    style: 'outlined',
    size: 'md'
  }
});

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    const { name, children, style, size, className } = props;
    const isNamed = !!name;

    return (
      <span
        ref={ref}
        slot="icon"
        className={cls(iconVariantProps({ style, size, className }), {
          'material-icons': isNamed
        })}
      >
        {name ?? children}
      </span>
    );
  }
);

Icon.displayName = 'Icon';
