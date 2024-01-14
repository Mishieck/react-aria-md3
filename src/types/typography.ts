import { SizeLong } from './size';

export type WeightPrefix<Name extends string> = `weight-${Name}`;
export type RefTypefacePrefix<Name extends string> = `md-ref-typeface-${Name}`;
export type RefTypefaceStyle = 'bold' | 'medium' | 'regular';
export type TypefaceName = 'brand' | 'plain' | WeightPrefix<RefTypefaceStyle>;

export type RefTypographyTokens = Record<
  RefTypefacePrefix<TypefaceName>,
  string
>;

export type SysTypescalePrefix<Name extends string> =
  `md-sys-typescale-${Name}`;

export type TypographySize = SizeLong;
export type TypographyWeight = 'normal' | 'medium' | 'bold';

export type TypographyScale =
  | 'display'
  | 'headline'
  | 'title'
  | 'body'
  | 'label';

export type TypographyProperty = 'font' | 'size' | 'line-height' | 'weight';

export type TypescaleName =
  `${TypographyScale}-${TypographySize}-${TypographyProperty}`;

export type SysTypographyTokens = Record<
  SysTypescalePrefix<TypescaleName>,
  string
>;

export type TypographyTheme = {
  ref: RefTypographyTokens;
  sys: SysTypographyTokens;
};
