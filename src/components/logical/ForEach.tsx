import React, { ReactElement } from 'react';

type RenderComponentType<Data> = (
  item: Data,
  index?: number,
  data?: Array<Data>
) => ReactElement;

export type ForEachProps<Data> = {
  data: Array<Data>;
  children: RenderComponentType<Data>;
};

export const ForEach = <Data extends Object>(props: ForEachProps<Data>) => {
  const { data, children } = props;
  return <>{data.map(children)}</>;
};
