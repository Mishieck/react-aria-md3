import { ContainerShape } from '@/types/shape';
import { ContainerVariant } from '@/types/container';
import { Button as RacButton } from 'react-aria-components';
import { Maybe } from '../logical/Maybe';
import { VariantProps, cva } from 'class-variance-authority';
import { cls } from '@/utils/cls';

type ButtonVariantProps = {
  container: Record<ContainerVariant, string>;
  shape: Record<ContainerShape, string>;
};

const buttonVariants = cva<ButtonVariantProps>(
  `px-6 py-2.5 flex items-center gap-x-2`,
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

export type ButtonProps = Partial<{
  container?: ContainerVariant;
  shape?: ContainerShape;
  children?: React.ReactNode;
  className?: string;
  hasIcon?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> &
  VariantProps<typeof buttonVariants>;

export const Button: React.FC<ButtonProps> = props => {
  const {
    container,
    shape,
    children,
    hasIcon = false,
    onClick,
    className,
    ...rest
  } = props;

  return (
    <RacButton
      className={cls('', buttonVariants({ container, shape, className }))}
    >
      {children}
    </RacButton>
  );
};
