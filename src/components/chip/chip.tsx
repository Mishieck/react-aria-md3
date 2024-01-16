import { cls } from '@/utils/cls';
import { cva } from 'class-variance-authority';
import React from 'react';
import { Maybe } from '../logical/Maybe';
import { Either } from '../logical/Either';
import { ContainerShape } from '@/types/shape';
import { MdIconName } from '@/types/material-icons';
import { Icon } from '../icon/icon';

export type ChipRole = 'assist' | 'filter' | 'input' | 'suggestion';

export type ChipRoleProps<
  Role extends ChipRole,
  Extension extends Record<string, unknown>
> = { chipRole: Role } & Partial<Extension>;

export type AssistChipProps = ChipRoleProps<
  'assist',
  {
    elevated: boolean;
    href: string;
    target: React.HTMLAttributeAnchorTarget;
    alwaysFocusable: boolean;
  }
>;

export type FilterChipProps = ChipRoleProps<
  'filter',
  {
    elevated: boolean;
    removable: boolean;
    selected: boolean;
    alwaysFocusable: boolean;
    ariaLabelRemove: boolean;
    handleTrailingActionFocus: () => void;
  }
>;

export type InputChipProps = ChipRoleProps<
  'input',
  {
    avatar: boolean;
    href: string;
    target: React.HTMLAttributeAnchorTarget;
    removeOnly: boolean;
    selected: boolean;
    alwaysFocusable: boolean;
    handleTrailingActionFocus: () => void;
    ariaLabelRemove: boolean;
  }
>;

export type SuggestionChipProps = ChipRoleProps<
  'suggestion',
  {
    elevated: boolean;
    href: string;
    target: React.HTMLAttributeAnchorTarget;
    alwaysFocusable: boolean;
  }
>;

export type ChipProps = React.HTMLAttributes<HTMLButtonElement> &
  (AssistChipProps | FilterChipProps | InputChipProps | SuggestionChipProps) & {
    shape?: ContainerShape;
    label: string;
    icon?: MdIconName;
    hasIcon?: boolean;
    hasAvatar?: boolean;
    elevated?: boolean;
  };

export type ChipVariantProps = {
  role: Record<ChipRole, string>;
  shape: Record<ContainerShape, string>;
};

export const chipVariantProps = cva<ChipVariantProps>(
  `
    border border-md-sys-color-outline
    h-8 
    py-1.5 px-3
    inline-flex flex-row items-center gap-2
    text-sm text-md-sys-color-on-surface
  `,
  {
    variants: {
      role: {
        assist: '',
        filter: '',
        input: '',
        suggestion: ''
      },
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded-lg',
        sharp: 'rounded-none'
      }
    },
    defaultVariants: {
      shape: 'rounded'
    }
  }
);

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (props, ref) => {
    const {
      chipRole,
      shape = 'rounded',
      label,
      icon,
      children,
      hasIcon = false,
      hasAvatar = false
    } = props;

    return (
      <button
        ref={ref}
        className={cls(chipVariantProps({ role: chipRole, shape }), {
          'bg-md-sys-color-secondary-container':
            'selected' in props && props.selected
        })}
      >
        <Either displayFirst={!!icon}>
          <Icon name={icon as MdIconName} size="sm" />
          <Maybe display={hasIcon || hasAvatar}>
            <Either displayFirst={hasAvatar}>
              <span className="rounded-full overflow-hidden w-[18px] aspect-square">
                {children}
              </span>
              <span className="w-[18px] aspect-square">{children}</span>
            </Either>
          </Maybe>
        </Either>
        <span>{label}</span>
      </button>
    );
  }
);

Chip.displayName = 'Chip';
