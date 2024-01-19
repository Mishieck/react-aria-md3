import React from 'react';
import { Either } from '../logical/Either';

export type ProgressLinearProps = {
  type: 'linear';
  buffer?: string;
};

export type ProgressCircularProps = {
  type: 'circular';
};

export type ProgressDeterminateProps = {
  value: number;
  max?: number;
};

export type ProgressIndeterminateProps = {
  indeterminate: true;
  fourColor: true;
};

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> &
  (ProgressLinearProps | ProgressCircularProps) &
  (ProgressDeterminateProps | ProgressIndeterminateProps) & {
    type: 'linear' | 'circular';
  };

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <Either displayFirst={type === 'linear'}>
        // TODO: Use material-web linear-progress
        <div className="bg-md-sys-color-primary">Linear</div>
        // TODO: Use material-web circular-progress
        <div className="bg-md-sys-color-primary">C</div>
      </Either>
    );
  }
);
