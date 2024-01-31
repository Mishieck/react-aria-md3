import { cls } from '../../utils/cls';
import React from 'react';

export type RippleProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<{
    unbounded: boolean;
    disabled: boolean;
  }>;

export const Ripple = React.forwardRef<HTMLDivElement, RippleProps>(
  (props, ref) => {
    const { unbounded, disabled = false, ...rest } = props;

    return (
      <div
        ref={ref}
        /**
         * TODO: add 'before:duration-15', 'after:duration-375',
         * TODO: and 'rac-pressed:after:duration-105'
         */
        className={cls(
          `
            absolute 
            m-auto inset-0
            rounded-[inherit]
            overflow-hidden
            forced-colors:hidden
            pointer-events-none
            rac-hover:before:bg-md-sys-color-on-surface 
            rac-hover:before:opacity-[var(--md-sys-state-hover-layer-opacity)]
            rac-pressed:after:opacity-[var(--md-sys-state-pressed-layer-opacity)]
            before:absolute before:inset-0 before:content-[''] before:opacity-0 
            before:bg-md-sys-color-on-surface
            before:transition-[opacity,_background-color] before:ease-linear 
            after:absolute after:content-[''] after:opacity-0
            after:bg-[radial-gradient(closest-side,_var(--md-sys-color-on-surface)_max(calc(100%_-_70px),_65%),transparent_100%)]
            after:origin-center after:transition-opacity after:ease-linear
          `,
          { hidden: disabled }
        )}
        style={{
          WebkitTapHighlightColor: 'transparent'
        }}
        {...rest}
      ></div>
    );
  }
);
