import React from 'react';
import {
  Modal,
  Dialog as RacDialog,
  type DialogProps as RacDialogProps
} from 'react-aria-components';
import { Button, ButtonProps } from '../button/button';
import { cls } from '../../utils/cls';

export type DialogProps = RacDialogProps;
export type DialogHeadlineProps = React.HTMLAttributes<HTMLDivElement>;
export type DialogContentProps = React.HTMLAttributes<HTMLDivElement>;
export type DialogActionsProps = React.HTMLAttributes<HTMLDivElement>;
export type DialogActionProps = ButtonProps;
export type DialogRenderProps = { close: () => void };
export type DialogChildren = (values: DialogRenderProps) => React.ReactNode;

export const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
  ({ className, ...props }, ref) => {
    const children: DialogChildren =
      typeof props.children === 'function'
        ? values => (props.children as CallableFunction)?.(values)
        : () => children;

    return (
      <Modal
        className={cls(
          'absolute top-0 left-0 w-full h-full p-8 bg-black bg-opacity-50',
          className
        )}
      >
        <RacDialog
          ref={ref}
          {...props}
          // TODO: USE 'bg-md-sys-color-surface-container-high' instead
          className="rounded-[28px] outline-none bg-md-sys-color-surface"
        >
          {children}
        </RacDialog>
      </Modal>
    );
  }
);

Dialog.displayName = 'Dialog';

export const DialogHeadline = React.forwardRef<
  HTMLDivElement,
  DialogHeadlineProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cls(
        `
          border-b border-md-sys-color-outline 
          p-8 pb-6 
          text-md-sys-color-on-surface text-md-sys-typescale-headline-small-font
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

DialogHeadline.displayName = 'DialogHeadline';

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cls(
        `
          px-8 py-6 
          text-md-sys-color-on-surface-variant 
          text-md-sys-typescale-body-medium-font
        `,
        className
      )}
      {...props}
    ></div>
  );
});

DialogContent.displayName = 'DialogContent';

export const DialogActions = React.forwardRef<
  HTMLDivElement,
  DialogActionsProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cls(
        `
          border-t border-md-sys-color-outline 
          p-8 pt-6 
          flex justify-end items-center
        `,
        className
      )}
      {...props}
    ></div>
  );
});

DialogActions.displayName = 'DialogActions';

export const DialogAction = React.forwardRef<
  HTMLButtonElement,
  DialogActionProps
>((props, ref) => {
  return <Button container="text" ref={ref} {...props}></Button>;
});

DialogAction.displayName = 'DialogAction';
