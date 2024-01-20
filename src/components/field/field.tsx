import { cls } from '@/utils/cls';
import { cva } from 'class-variance-authority';
import React from 'react';
import { Button, Label } from 'react-aria-components';

export type FieldContainer = 'filled' | 'outlined';

export type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  container?: FieldContainer;
  label: string;
};

export type FieldLabelProps = React.HTMLAttributes<HTMLLabelElement>;

export type FieldIconProps = React.HTMLAttributes<HTMLSpanElement>;

export type FieldVariantProps = {
  container: Record<FieldContainer, string>;
};

export const fieldVariantProps = cva<FieldVariantProps>(`relative`, {
  variants: {
    container: {
      filled: '',
      outlined: ''
    }
  }
});

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, children, label, container = 'outlined', ...props }, ref) => {
    return (
      <Button className={cls(fieldVariantProps({ container }))}>
        {({ isFocused }) => (
          <>
            <span
              className={cls(
                'w-[inherit] h-[inherit] p-[inherit]',
                {},
                className
              )}
            >
              {label}
            </span>
            {children}
          </>
        )}
      </Button>
    );
  }
);

Field.displayName = 'Field';

export const FieldLabel = React.forwardRef<HTMLDivElement, FieldLabelProps>(
  ({ ...props }, ref) => {
    return <Label className={cls()} {...props} />;
  }
);
