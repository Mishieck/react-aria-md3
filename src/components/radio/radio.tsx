import { cls } from '../../utils/cls';
import React from 'react';
import {
  Radio as RacRadio,
  RadioGroup as RacRadioGroup,
  type RadioProps as RacRadioProps,
  type RadioGroupProps as RacRadioGroupProps
} from 'react-aria-components';

export type RadioProps = RacRadioProps;
export type RadioGroupProps = RacRadioGroupProps;

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <RacRadio
        ref={ref}
        className={cls(
          `
            relative
            flex items-center gap-4
            forced-color-adjust-none
            before:content-[''] 
            before:rounded-full
            before:block
            before:box-border
            before:border-2 
            before:border-md-sys-color-on-surface-variant
            before:w-[20px] before:aspect-square
            before:p-2
            before:text-md-sys-color-on-surface-variant
            rac-selected:before:border-md-sys-color-primary
            after:content-[''] 
            after:absolute after:start-[4px]
            after:block
            after:box-border
            after:rounded-full
            after:bg-transparent
            after:w-[12px] after:!aspect-square
            after:p-2
            after:text-md-sys-color-primary
            rac-selected:after:bg-md-sys-color-primary
          `,
          className
        )}
        {...rest}
      ></RacRadio>
    );
  }
);

Radio.displayName = 'Radio';

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <RacRadioGroup
        ref={ref}
        className={cls('flex flex-col gap-4', className)}
        {...props}
      ></RacRadioGroup>
    );
  }
);
