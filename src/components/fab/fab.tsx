import { SizeLong } from '../../types/size';
import { cls } from '../../utils/cls';
import React, { forwardRef } from 'react';
import { Button } from 'react-aria-components';
import { Ripple } from '../ripple/ripple';
import { Elevation } from '../elevation/elevation';
import {
  FabColor,
  FabIconProps,
  FabLabelProps,
  FabProps,
  FabVariant,
  FabVariantBooleanProps,
  fabElevationLevels,
  fabIconSizes,
  fabIconVariantProps,
  fabLabelVariantProps,
  fabStateElevationLevels,
  fabVariantProps
} from './fab.props';
import { Icon, iconSizeStyles } from '../icon/icon';
import { Text } from '../text/text';

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  (props, ref) => {
    const {
      children,
      extended = false,
      branded = false,
      lowered = false,
      hasIcon = true,
      className,
      noTouchTarget = false,
      ...rest
    } = props;

    let size: SizeLong = 'size' in props ? (props.size as SizeLong) : 'medium';

    const color: FabColor =
      'color' in props ? (props.color as FabColor) : 'surface';

    if (branded && size === 'small')
      throw new Error(`Branded Fab can not have size 'small'.`);

    const fabVariantBooleanProps: FabVariantBooleanProps = {
      extended,
      branded,
      lowered,
      hasIcon
    };

    return (
      <div className={cls('p-4', className)}>
        <Button
          ref={ref}
          className={cls(
            '',
            fabVariantProps(fabVariantBooleanProps)({
              size,
              color
            }),
            {
              // TODO: Use 'bg-md-sys-color-surface-container-low' instead
              'bg-md-sys-color-surface':
              'lowered' in props ? props.lowered : false,
              hidden: noTouchTarget
            }
          )}
          style={{ WebkitTapHighlightColor: 'transparent' }}
          {...rest}
        >
          {({ isHovered }) => (
            <>
              {children}
              <Ripple className="-z-10" />
              <Elevation
                className="-z-10"
                level={
                  (isHovered ? fabStateElevationLevels : fabElevationLevels)[size]
                }
              />
              <div
                className="
                absolute top-1/2 left-1/2 
                w-[48px] aspect-square 
                -translate-x-1/2 -translate-y-1/2
                "
              ></div>
            </>
          )}
        </Button>
      </div>
    );
  }
);

Fab.displayName = 'Fab';

export const FabIcon = React.forwardRef<HTMLSpanElement, FabIconProps>(
  (props, ref) => {
    const {
      size = 'medium',
      color,
      extended = false,
      branded = false,
      ...rest
    } = props;

    const variantBooleanProps: FabVariantBooleanProps = {
      extended,
      branded,
      lowered: false,
      hasIcon: false
    };

    return (
      <Icon
        ref={ref}
        size={fabIconSizes[size]}
        {...rest}
        className={cls(fabIconVariantProps(variantBooleanProps))}
      />
    );
  }
);

export const FabLabel = React.forwardRef<HTMLSpanElement, FabLabelProps>(
  (props, ref) => {
    const {
      size = 'medium',
      color,
      extended = false,
      branded = false,
      children,
      ...rest
    } = props;

    const variantBooleanProps: FabVariantBooleanProps = {
      extended,
      branded,
      lowered: false,
      hasIcon: false
    };

    return (
      <Text
        ref={ref}
        className={cls(
          fabLabelVariantProps(variantBooleanProps),
          iconSizeStyles[fabIconSizes[size]]
        )}
      >
        {children}
      </Text>
    );
  }
);
