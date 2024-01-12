import React, { Children } from 'react';

export type EitherProps = {
  displayFirst: boolean;
  children: React.ReactNode;
};

export const Either: React.FC<EitherProps> = props => {
  const { displayFirst, children } = props;
  return Children.toArray(children)[displayFirst ? 0 : 1] as React.ReactElement;
};
