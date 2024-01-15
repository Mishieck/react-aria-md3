import { MdIconName } from '@/types/material-icons';
import { SizeShort } from '@/types/size';
import { cls } from '@/utils/cls';
import { cva } from 'class-variance-authority';
import React from 'react';

export type IconStyle = 'filled' | 'outlined' | 'sharp';

export type IconProps = {
  name: MdIconName;
  style?: IconStyle;
  size?: SizeShort;
  className?: string;
};

export type IconVariantProps = {
  style: Record<IconStyle, string>;
  size: Record<SizeShort, string>;
};

const iconVariantProps = cva<IconVariantProps>('material-icons ', {
  variants: {
    style: {
      filled: 'material-icons-filled',
      outlined: 'material-icons-outlined',
      sharp: 'material-icons-sharp'
    },
    size: {
      xl: '!text-[40px]',
      lg: '!text-[32px]',
      md: '!text-[24px]',
      sm: '!text-[16px]',
      xs: '!text-[12px]'
    }
  },
  defaultVariants: {
    style: 'outlined',
    size: 'md'
  }
});

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    const { name, style, size, className } = props;

    return (
      <span
        ref={ref}
        slot="icon"
        className={cls(iconVariantProps({ style, size, className }))}
      >
        {name}
      </span>
    );
  }
);

Icon.displayName = 'Icon';
