export type MainColorTone =
  | 0
  | 10
  | 20
  | 30
  | 40
  | 50
  | 60
  | 70
  | 80
  | 90
  | 95
  | 99
  | 100;

export type NeutralColorTone =
  | MainColorTone
  | 4
  | 6
  | 12
  | 17
  | 22
  | 24
  | 87
  | 92
  | 94
  | 95
  | 96
  | 98;

export type RefColor<
  Name extends string,
  Tone extends number
> = `${Name}-${Tone}`;

export type RefColorNamedName = 'black' | 'white';
export type RefColorMainName = 'primary' | 'secondary' | 'tertiary';
export type RefColorAlertName = 'error' | 'warning' | 'info' | 'success';
export type RefColorNeutralName = 'neutral';
export type RefColorExtraName = 'neutral-variant';
