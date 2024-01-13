import {
  ColorTheme,
  CssColorTheme,
  CssRefColorScheme,
  CssRefColorTones,
  CssSysColorScheme,
  RefColorScheme,
  RefColorTones,
  SysColorScheme
} from '@/types/colors';

const refPrefix = '--md-ref-color';
const sysPrefix = '--md-sys-color';

const getCssRefColorTones = <Name extends string, Tone extends number>(
  colorName: string,
  tones: RefColorTones<Tone>
) => {
  return Object.entries(tones).reduce(
    (tones, [name, value]) => ({ ...tones, [`${colorName}-${name}`]: value }),
    {} as CssRefColorTones<Name, Tone>
  );
};

export const getCssRefColorScheme = <CustomName extends string = never>(
  inputScheme: RefColorScheme<CustomName>
) => {
  const { neutral, black, white, ...mainTones } = inputScheme;

  const refScheme: Partial<CssRefColorScheme<CustomName>> = Object.entries(
    mainTones
  ).reduce(
    (scheme, [name, tones]) => ({
      ...scheme,
      ...getCssRefColorTones(`${refPrefix}-${name}`, tones)
    }),
    {}
  );

  Object.assign(
    refScheme,
    getCssRefColorTones(`${refPrefix}-neutral`, neutral)
  );

  Object.entries({ black, white }).reduce((scheme, [name, value]) => ({
    ...scheme,
    [`${refPrefix}-${name}`]: value
  }));

  return refScheme as CssRefColorScheme<CustomName>;
};

export const getCssSysColorScheme = <CustomName extends string = never>(
  inputScheme: SysColorScheme<CustomName>
) => {
  const scheme: Partial<CssSysColorScheme<CustomName>> = Object.entries(
    inputScheme
  ).reduce(
    (scheme, [name, value]) => ({ ...scheme, [`${sysPrefix}-${name}`]: value }),
    {}
  );

  return scheme as CssSysColorScheme<CustomName>;
};

export const getCssColorTheme = <CustomName extends string = never>(
  theme: ColorTheme<CustomName>
): CssColorTheme<CustomName> => ({
  ref: getCssRefColorScheme(theme.ref),
  sys: {
    dark: getCssSysColorScheme(theme.sys.dark),
    light: getCssSysColorScheme(theme.sys.light)
  }
});
