import {
  SysState,
  SysStatePrefix,
  SysStateLayerOpacitySuffix,
  SysStateTokens,
  SysStateLayerOpacityValues
} from '@/types/state';

export const sysStateLayerOpacityValues: SysStateLayerOpacityValues = {
  dragged: 0.16,
  focus: 0.12,
  hover: 0.08,
  pressed: 0.12
};

export const sysStatePrefix = <State extends string>(
  state: State
): SysStatePrefix<State> => `md-sys-state-${state}`;

export const sysStateOpacitySuffix = (
  state: SysState
): SysStateLayerOpacitySuffix<SysState> => `${state}-layer-opacity`;

export const getSysStateTokens = (): SysStateTokens => {
  return Object.entries(sysStateLayerOpacityValues).reduce(
    (record, [property, value]) => ({
      ...record,
      [sysStatePrefix(sysStateOpacitySuffix(property as SysState))]: value
    }),
    {} as SysStateTokens
  );
};
