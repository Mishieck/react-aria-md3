import { cls } from '../../utils/cls';
import { cva } from 'class-variance-authority';
import React from 'react';

export type DividerInset = 'both' | 'start' | 'end';

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  inset?: DividerInset;
};

export type DividerVariantProps = {
  inset: Record<DividerInset, string>;
};

export const dividerVariantProps = cva<DividerVariantProps>('w-full', {
  variants: {
    inset: {
      both: 'px-[16px]',
      start: 'ps-[16px]',
      end: 'pe-[16px]'
    }
  }
});

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ inset, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cls(dividerVariantProps({ inset, className }))}
      {...props}
    >
      <hr className="border border-md-sys-color-outline-variant" />
    </div>
  )
);

Divider.displayName = 'Divider';
