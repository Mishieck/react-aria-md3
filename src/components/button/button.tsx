import { ContainerShape } from '../../types/shape';
import { ContainerVariant } from '../../types/container';
import {
  Button as RacButton,
  type ButtonProps as RacButtonProps
} from 'react-aria-components';
import { VariantProps, cva } from 'class-variance-authority';
import { cls } from '../../utils/cls';
import React from 'react';

type ButtonVariantProps = {
  container: Record<ContainerVariant, string>;
  shape: Record<ContainerShape, string>;
};

const buttonVariants = cva<ButtonVariantProps>(
  `px-6 py-2.5 inline-flex items-center gap-x-2`,
  {
    variants: {
      container: {
        filled: 'bg-md-sys-color-primary text-md-sys-color-on-primary',
        outlined:
          'border border-md-sys-color-outline text-md-sys-color-primary',
        elevated:
          'shadow-lg bg-md-sys-color-surface text-md-sys-color-on-surface',
        text: 'text-md-sys-color-primary',
        tonal:
          'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container'
      },
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded-md',
        sharp: ''
      }
    },
    defaultVariants: {
      container: 'filled',
      shape: 'pill'
    }
  }
);

export type ButtonProps = RacButtonProps &
  Partial<{
    container?: ContainerVariant;
    shape?: ContainerShape;
    hasIcon?: boolean;
  }> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      container,
      shape,
      children,
      hasIcon = false,
      className,
      ...rest
    } = props;

    return (
      <RacButton
        ref={ref}
        className={cls('', buttonVariants({ container, shape, className }))}
        {...rest}
      >
        {children}
      </RacButton>
    );
  }
);

Button.displayName = 'Button';
