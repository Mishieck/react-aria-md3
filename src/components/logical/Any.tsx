import React, { Children } from 'react';

export type AnyProps = {
  display: number;
  children: React.ReactNode;
};

export const Any: React.FC<AnyProps> = props => {
  const { display, children } = props;
  const elements = Children.toArray(children);

  if (display >= elements.length) {
    throw new Error('Element index out of bounds.');
  }

  return elements[display] as React.ReactElement;
};
