import {
  argbFromHex,
  hexFromArgb,
  Scheme,
  Theme,
  themeFromSourceColor,
  TonalPalette
} from '@material/material-color-utilities';

import {
  ColorTheme,
  CssColorScheme,
  CssColorTheme,
  CustomColor,
  RefColorScheme,
  RefColorTones,
  RefMainColorTone,
  RefNeutralColorTone,
  SysColorScheme,
  SysColorSchemeMode,
  SysColorSchemes
} from '../../types/colors';

export const mainTones: Array<RefMainColorTone> = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100
] as const;

export const neutralTones: Array<RefNeutralColorTone> = [
  ...mainTones,
  4,
  6,
  12,
  17,
  22,
  24,
  87,
  92,
  94,
  95,
  96,
  98
];

export const alertCustomColors: Array<CustomColor> = [
  { name: 'warning', value: '#00FFFF' },
  { name: 'info', value: '#0000FF' },
  { name: 'success', value: '#00FF00' }
];

export const getRefTones =
  <Tone extends number>(tones: Array<Tone>) =>
  (tonalPalette: TonalPalette): RefColorTones<Tone> =>
    tones.reduce(
      (tones, tone) => ({
        ...tones,
        [tone]: hexFromArgb(tonalPalette.tone(tone))
      }),
      {} as RefColorTones<Tone>
    );

export const getRefScheme = <CustomColor extends string>(
  palettes: Theme['palettes'],
  customColors: Theme['customColors']
): RefColorScheme<CustomColor> => {
  const getMainTones = getRefTones<RefMainColorTone>(mainTones);

  const scheme: RefColorScheme = {
    primary: getMainTones(palettes.primary),
    secondary: getMainTones(palettes.secondary),
    tertiary: getMainTones(palettes.tertiary),
    'neutral-variant': getMainTones(palettes.neutralVariant),
    error: getMainTones(palettes.error),
    neutral: getRefTones<RefNeutralColorTone>(neutralTones)(palettes.neutral),
    black: '#000000',
    white: '#FFFFFF'
  };

  // TODO: Generate tones for custom colors
  for (const { color } of customColors) {
    // TODO: Replace this with actual palettes
    const tones = getMainTones(palettes.primary);
    Object.assign(scheme, { [color.name]: tones });
  }

  return scheme as RefColorScheme<CustomColor>;
};

export const getSysSchemeMode = <CustomColor extends string>(
  inputScheme: Scheme,
  mode: SysColorSchemeMode,
  customColors: Theme['customColors']
): SysColorScheme<CustomColor> => {
  const scheme: SysColorScheme = {
    primary: hexFromArgb(inputScheme.primary),
    'on-primary': hexFromArgb(inputScheme.onPrimary),
    'primary-container': hexFromArgb(inputScheme.primaryContainer),
    'on-primary-container': hexFromArgb(inputScheme.onPrimaryContainer),
    secondary: hexFromArgb(inputScheme.secondary),
    'on-secondary': hexFromArgb(inputScheme.onSecondary),
    'secondary-container': hexFromArgb(inputScheme.secondaryContainer),
    'on-secondary-container': hexFromArgb(inputScheme.onSecondaryContainer),
    tertiary: hexFromArgb(inputScheme.tertiary),
    'on-tertiary': hexFromArgb(inputScheme.onTertiary),
    'tertiary-container': hexFromArgb(inputScheme.tertiaryContainer),
    'on-tertiary-container': hexFromArgb(inputScheme.onTertiaryContainer),
    error: hexFromArgb(inputScheme.error),
    'on-error': hexFromArgb(inputScheme.onError),
    'error-container': hexFromArgb(inputScheme.errorContainer),
    'on-error-container': hexFromArgb(inputScheme.onErrorContainer),
    background: hexFromArgb(inputScheme.background),
    'on-background': hexFromArgb(inputScheme.onBackground),
    surface: hexFromArgb(inputScheme.surface),
    'on-surface': hexFromArgb(inputScheme.onSurface),
    'surface-variant': hexFromArgb(inputScheme.surfaceVariant),
    'on-surface-variant': hexFromArgb(inputScheme.onSurfaceVariant),
    outline: hexFromArgb(inputScheme.outline),
    'inverse-surface': hexFromArgb(inputScheme.inverseSurface),
    'inverse-on-surface': hexFromArgb(inputScheme.inverseOnSurface),
    'outline-variant': hexFromArgb(inputScheme.outlineVariant),
    'inverse-primary': hexFromArgb(inputScheme.inversePrimary),
    scrim: hexFromArgb(inputScheme.scrim),
    shadow: hexFromArgb(inputScheme.shadow)
  };

  for (const customColor of customColors) {
    const { color: colorValue, light, dark } = customColor;
    const name = colorValue.name;

    const { color, onColor, colorContainer, onColorContainer } =
      mode === 'dark' ? dark : light;

    Object.assign(scheme, {
      [name]: hexFromArgb(color),
      [`on-${name}`]: hexFromArgb(onColor),
      [`${name}-container`]: hexFromArgb(colorContainer),
      [`on-${name}-container`]: hexFromArgb(onColorContainer)
    });
  }

  return scheme as SysColorScheme<CustomColor>;
};

export const getSysSchemes = <CustomColor extends string>(
  theme: Theme
): SysColorSchemes<CustomColor> => {
  return {
    dark: getSysSchemeMode<CustomColor>(
      theme.schemes.dark,
      'dark',
      theme.customColors
    ),
    light: getSysSchemeMode<CustomColor>(
      theme.schemes.light,
      'light',
      theme.customColors
    )
  };
};

export const getColorTheme = (
  color: string,
  customColors: Array<CustomColor>
): ColorTheme<(typeof customColors)[number]['name']> => {
  type CustomColorName = (typeof customColors)[number]['name'];

  const theme = themeFromSourceColor(
    argbFromHex(color),
    customColors.map(({ name, value }) => ({
      name,
      value: argbFromHex(value),
      blend: true
    }))
  );

  return {
    ref: getRefScheme<CustomColorName>(theme.palettes, theme.customColors),
    sys: getSysSchemes<CustomColorName>(theme)
  };
};
