import { ContainerShape } from '@/types/shape';
import { ContainerVariant } from '@/types/container';
import { Maybe } from '../logical/Maybe';

export type ButtonProps = Partial<{
  variant: ContainerVariant;
  shape: ContainerShape;
  children: React.ReactNode;
  icon: React.ReactElement;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}>;

export const Button: React.FC<ButtonProps> = props => {
  const { variant, shape, children, icon, onClick, ...rest } = props;

  return <button className="">{children}</button>;
};
