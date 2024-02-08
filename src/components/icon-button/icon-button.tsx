import { ContainerShape } from '../../types/shape';
import { ContainerVariant } from '../../types/container';
import {
  Button as RacButton,
  type ButtonProps as RacButtonProps
} from 'react-aria-components';
import { VariantProps, cva } from 'class-variance-authority';
import { cls } from '../../utils/cls';
import React from 'react';
import { MdIconName } from '../../types/material-icons';
import { Icon } from '../icon/icon';
import { Either } from '../logical/Either';

export type IconButtonContainerVariant =
  | Exclude<ContainerVariant, 'text' | 'elevated'>
  | 'default';

export type IconButtonVariantProps = {
  container: Record<IconButtonContainerVariant, string>;
  shape: Record<ContainerShape, string>;
};

export const buttonVariants = cva<IconButtonVariantProps>(
  `w-12 aspect-square grid place-items-center`,
  {
    variants: {
      container: {
        default: 'text-md-sys-color-primary',
        filled: 'bg-md-sys-color-primary text-md-sys-color-on-primary',
        outlined:
          'border border-md-sys-color-outline text-md-sys-color-primary',
        tonal:
          'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container'
      },
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded-md',
        sharp: 'rounded-0'
      }
    },
    defaultVariants: {
      container: 'filled',
      shape: 'pill'
    }
  }
);

export type IconButtonProps = RacButtonProps &
  Partial<{
    container: IconButtonContainerVariant;
    shape: ContainerShape;
    icon: MdIconName;
  }> &
  VariantProps<typeof buttonVariants>;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { container, shape, icon, className, children, ...rest } = props;
    const hasNamedIcon = !!icon;

    return (
      <RacButton
        ref={ref}
        className={cls('', buttonVariants({ container, shape, className }))}
        {...rest}
      >
        <Either displayFirst={hasNamedIcon}>
          <Icon name={icon as MdIconName} />
          {(children as React.ReactNode) ?? <></>}
        </Either>
      </RacButton>
    );
  }
);

IconButton.displayName = 'IconButton';
