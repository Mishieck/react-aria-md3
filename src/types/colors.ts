export type RefMainColorTone =
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

export type RefNeutralColorTone =
  | RefMainColorTone
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

export type RefColorTones<Tone extends number> = Record<Tone, string>;
export type RefColorNamedName = 'black' | 'white';
export type RefColorMainName = 'primary' | 'secondary' | 'tertiary';
export type RefColorAlertName = 'error';
export type RefColorNeutralName = 'neutral';
export type RefColorExtraName = 'neutral-variant';

export type RefColorScheme<CustomName extends string = never> = Record<
  RefColorMainName | RefColorAlertName | RefColorExtraName | CustomName,
  RefColorTones<RefMainColorTone>
> &
  Record<RefColorNeutralName, RefColorTones<RefNeutralColorTone>> &
  Record<RefColorNamedName, string>;

export type SysMainKeyColor<Name extends string> = Name | `on-${Name}`;

export type SysMainContainerColor<Name extends string> =
  | `${Name}-container`
  | `on-${Name}-container`;

export type SysMainColor<Name extends string> =
  | SysMainKeyColor<Name>
  | SysMainContainerColor<Name>;

export type SysColorNamedName =
  | 'shadow'
  | 'scrim'
  | 'inverse-surface'
  | 'inverse-on-surface'
  | 'inverse-primary'
  | 'outline'
  | 'outline-variant';

export type SysColorExtraName = 'background' | 'surface' | 'surface-variant';

export type SysColorName<CustomName extends string = never> =
  | SysMainColor<RefColorMainName | RefColorAlertName | CustomName>
  | SysMainKeyColor<SysColorExtraName>
  | SysColorNamedName;

export type SysColorScheme<CustomName extends string = never> = Record<
  SysColorName<CustomName>,
  string
>;

export type SysColorSchemeMode = 'dark' | 'light';

export type SysColorSchemes<CustomName extends string = never> = Record<
  SysColorSchemeMode,
  SysColorScheme<CustomName>
>;

export type AlertCustomColor = 'warning' | 'info' | 'success';
export type CustomColor = { name: string; value: string };

export type ColorTheme<CustomName extends string = never> = {
  ref: RefColorScheme<CustomName>;
  sys: SysColorSchemes<CustomName>;
};

export type TailwindColor<Tone extends number> = {
  DEFAULT: string;
  foreground: string;
} & RefColorTones<Tone>;

export type ColorPrefix<Value extends string> = `color-${Value}`;
export type MdPrefix<Value extends string> = `md-${Value}`;
export type RefPrefix<Value extends string> = `${MdPrefix<'ref'>}-${Value}`;
export type SysPrefix<Value extends string> = `${MdPrefix<'sys'>}-${Value}`;

export type TailwindColorTheme<CustomName extends string = never> = Record<
  RefPrefix<
    RefColorMainName | RefColorAlertName | RefColorExtraName | CustomName
  >,
  RefColorTones<RefMainColorTone>
> &
  Record<RefPrefix<RefColorNeutralName>, RefColorTones<RefNeutralColorTone>> &
  Record<RefPrefix<RefColorNamedName>, string> &
  Record<SysPrefix<SysColorName<CustomName>>, string>;

export type CssVariablePrefix<Name extends string> = `--${Name}`;

export type CssRefColorTone<
  Name extends string,
  Tone extends number
> = `${Name}-${Tone}`;

export type CssRefColorTones<Name extends string, Tone extends number> = Record<
  CssRefColorTone<Name, Tone>,
  Tone
>;

export type CssRefColorName<CustomName extends string = never> =
  | CssRefColorTone<
      RefPrefix<
        ColorPrefix<
          RefColorMainName | RefColorAlertName | RefColorExtraName | CustomName
        >
      >,
      RefMainColorTone
    >
  | CssRefColorTone<
      RefPrefix<ColorPrefix<RefColorNeutralName>>,
      RefNeutralColorTone
    >
  | RefPrefix<ColorPrefix<RefColorNamedName>>;

export type CssSysColorName<CustomName extends string = never> = SysPrefix<
  ColorPrefix<SysColorName<CustomName>>
>;

export type CssColorScheme<Name extends string> = Record<
  CssVariablePrefix<Name>,
  string
>;

export type CssRefColorScheme<CustomName extends string = never> =
  CssColorScheme<CssRefColorName<CustomName>>;

export type CssSysColorScheme<CustomName extends string = never> =
  CssColorScheme<CssSysColorName<CustomName>>;

export type CssColorTheme<CustomName extends string = never> = {
  ref: CssRefColorScheme<CustomName>;
  sys: Record<SysColorSchemeMode, CssSysColorScheme<CustomName>>;
};
