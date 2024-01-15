import { MdIconName } from '@/types/material-icons';
import { SizeShort } from '@/types/size';
import React from 'react';

export type IconProps = {
  name: MdIconName;
  filled?: boolean;
  size?: SizeShort;
  className?: string;
};

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    const { name, filled = false, size = 'md', className } = props;

    return (
      <span
        ref={ref}
        slot="icon"
        className={`material-icons material-icons${
          filled ? '' : '-outlined'
        } ${className}`}
      >
        {name}
      </span>
    );
  }
);

Icon.displayName = 'Icon';
