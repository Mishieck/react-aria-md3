import React from 'react';
import {
  Slider as RacSlider,
  SliderThumb,
  SliderOutput,
  type SliderProps as RacSliderProps,
  LabelProps,
  Label,
  SliderTrack
} from 'react-aria-components';
import { Icon, IconProps } from '../icon/icon';
import { cls } from '@/utils/cls';

export type SliderPoint = Partial<{
  value: number;
  label: string;
  ariaLabel: string;
  ariaValueText: string;
  name: string;
}>;

export type SliderRangeProps = {
  range: true;
  start: SliderPoint;
  end: SliderPoint;
};

export type SliderProps = (SliderPoint | SliderRangeProps) &
  Partial<{
    steps: number;
    ticks: boolean;
    labeled: boolean;
  }>;

export type SliderIconProps = IconProps;
export type SliderLabelProps = LabelProps;

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ ...props }, ref) => {
    return (
      // TODO: Use md-slider
      <></>
    );
  }
);

Slider.displayName = 'Slider';

export const SliderIcon = React.forwardRef<HTMLSpanElement, SliderIconProps>(
  (props, ref) => {
    return <Icon ref={ref} {...props} />;
  }
);

SliderIcon.displayName = 'SliderIcon';

export const SliderLabel = React.forwardRef<HTMLLabelElement, SliderLabelProps>(
  (props, ref) => {
    return <Label ref={ref} {...props}></Label>;
  }
);

SliderIcon.displayName = 'SliderLabel';
