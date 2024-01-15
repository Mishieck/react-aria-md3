import React from 'react';
import {
  CheckboxRenderProps,
  Checkbox as RacCheckbox,
  type CheckboxProps as RacCheckboxProps
} from 'react-aria-components';
import { Icon } from '../icon/icon';
import { cls } from '@/utils/cls';
import { Either } from '../logical/Either';
import { cva } from 'class-variance-authority';
import { Maybe } from '../logical/Maybe';

export type CheckboxState = 'checked' | 'standalone' | 'indeterminate';

export type CheckboxVariantProps = {
  state: Record<CheckboxState, string>;
};

export type CheckboxProps = RacCheckboxProps & {};

export const getCheckboxState = ({
  isIndeterminate,
  isSelected
}: CheckboxRenderProps): CheckboxState => {
  if (isSelected) return 'checked';
  return isIndeterminate ? 'indeterminate' : 'standalone';
};

export const checkboxVariantProps = cva<CheckboxVariantProps>(
  'rounded-[2px] w-[18px] aspect-square grid place-items-center',
  {
    variants: {
      state: {
        standalone: 'border-[2px] border-md-sys-color-on-surface-variant',
        checked: 'bg-md-sys-color-primary text-md-sys-color-on-primary',
        indeterminate: 'bg-md-sys-color-primary text-md-sys-color-on-primary'
      }
    },
    defaultVariants: {
      state: 'standalone'
    }
  }
);

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <RacCheckbox
        ref={ref}
        {...rest}
        className={cls('flex items-center gap-4', className)}
      >
        {values => (
          <>
            <div
              className={cls(
                checkboxVariantProps({
                  state: getCheckboxState(values)
                })
              )}
            >
              <Maybe display={values.isIndeterminate || values.isSelected}>
                <Either displayFirst={values.isIndeterminate}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <rect
                      x={3}
                      y={7}
                      width={10}
                      height={2}
                      fill="currentColor"
                    />
                  </svg>
                  <Icon name="check" size="xs" />
                </Either>
              </Maybe>
            </div>
            {children}
          </>
        )}
      </RacCheckbox>
    );
  }
);

Checkbox.displayName = 'Checkbox';
