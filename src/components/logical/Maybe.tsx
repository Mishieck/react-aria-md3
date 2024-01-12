import React from 'react';
import { Empty } from './Empty';
import { Either } from './Either';

export type MaybeProps = {
  display: boolean;
  children: React.ReactElement;
};

export const Maybe: React.FC<MaybeProps> = ({ display, children }) => (
  <Either displayFirst={display}>
    {children}
    <Empty />
  </Either>
);
