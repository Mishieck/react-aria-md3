import { cls } from '../../utils/cls';
import { cva } from 'class-variance-authority';
import React from 'react';

export type ElevationLevel = '0' | '1' | '2' | '3' | '4' | '5';

export type ElevationProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  level?: ElevationLevel;
};

export type ElevationVariantProps = {
  level: Record<ElevationLevel, string>;
};

const elevationVariantProps = cva<ElevationVariantProps>(
  `
    before:content-[''] after:content-['']
    absolute before:absolute after:absolute
    before:shadow-md-sys-color-shadow after:shadow-md-sys-color-shadow 
    rounded-[inherit] before:rounded-[inherit] after:rounded-[inherit] 
    inset-0 before:inset-0 after:inset-0 
    flex pointer-events-none
    before:opacity-30 after:opacity-15 
    transition-[inherit] 
    before:transition-[box-shadow,_opacity] 
    after:transition-[box-shadow,_opacity]
  `,
  {
    variants: {
      level: {
        0: `before:shadow-[0px_0px_0px_0px] after:shadow-[0px_1px_2px_0px]`,
        1: `before:shadow-[0px_1px_2px_0px] after:shadow-[0px_1px_3px_1px]`,
        2: `before:shadow-[0px_1px_2px_0px] after:shadow-[0px_2px_6px_2px]`,
        3: `before:shadow-[0px_1px_3px_0px] after:shadow-[0px_4px_8px_3px]`,
        4: `before:shadow-[0px_2px_3px_0px] after:shadow-[0px_6px_10px_4px]`,
        5: `before:shadow-[0px_4px_4px_0px] after:shadow-[0px_8px_12px_6px]`
      }
    }
  }
);

export const Elevation = React.forwardRef<HTMLDivElement, ElevationProps>(
  ({ level = '0', className, ...props }, ref) => (
    <div
      ref={ref}
      className={cls(elevationVariantProps({ level, className }))}
      {...props}
    ></div>
  )
);

Elevation.displayName = 'Elevation';
