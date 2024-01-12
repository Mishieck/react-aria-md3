import React, { Children } from 'react';

export type SomeProps = {
  display: Array<number>;
  children: React.ReactNode;
};

export const Some: React.FC<SomeProps> = props => {
  const { display, children } = props;
  const elements: Array<React.ReactNode> = Children.toArray(children);

  if (display.some(index => index >= elements.length)) {
    throw new Error('Element index out of bounds.');
  }

  return <>{display.map(index => elements[index])}</>;
};
