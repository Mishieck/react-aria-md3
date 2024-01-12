import { SizeShort } from '@/types/size';

export type IconProps = {
  name: string;
  filled?: boolean;
  size?: SizeShort;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  filled = false,
  size = 'md',
  className
}) => {
  return (
    <span
      slot="icon"
      className={`material-icons material-icons${
        filled ? '' : '-outlined'
      } ${className}`}
    >
      {name}
    </span>
  );
};
