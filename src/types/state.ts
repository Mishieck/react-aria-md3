export type SysState = 'dragged' | 'hover' | 'focus' | 'pressed';
export type SysStatePrefix<State extends string> = `md-sys-state-${State}`;

export type SysStateLayerOpacitySuffix<State extends string> =
  `${State}-layer-opacity`;

export type SysStateLayerOpacityValues = Record<SysState, number>;
export type SysStateTokens = Record<
  SysStatePrefix<SysStateLayerOpacitySuffix<SysState>>,
  number
>;
