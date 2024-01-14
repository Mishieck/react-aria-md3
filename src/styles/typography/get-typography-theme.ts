import {
  RefTypographyTokens,
  SysTypographyTokens,
  TypographyTheme
} from '@/types/typography';

export const refTypefacePrefix = (value: string) => `md-ref-typeface-${value}`;

export const sysTypescalePrefix = (value: string) =>
  `md-sys-typescale-${value}`;

export const cssVar = (value: string) => `var(--${value})`;

export const getRefTypographyTokens = (): RefTypographyTokens => ({
  'md-ref-typeface-brand': `"Roboto"`,
  'md-ref-typeface-plain': 'system-ui',
  'md-ref-typeface-weight-bold': 'bold',
  'md-ref-typeface-weight-medium': 'medium',
  'md-ref-typeface-weight-regular': 'regular'
});

export const getSysTypographyTokens = (): SysTypographyTokens => {
  const font = cssVar(refTypefacePrefix('brand'));
  const weight = cssVar(refTypefacePrefix('weight-medium'));

  const lineHeight = (name: string) =>
    `calc(${cssVar(sysTypescalePrefix(`${name}-line-height`))} * 1.5)`;

  return {
    'md-sys-typescale-body-large-font': font,
    'md-sys-typescale-body-large-line-height': lineHeight('body-large'),
    'md-sys-typescale-body-large-size': '1rem',
    'md-sys-typescale-body-large-weight': weight,
    'md-sys-typescale-body-medium-font': font,
    'md-sys-typescale-body-medium-line-height': lineHeight('body-medium'),
    'md-sys-typescale-body-medium-size': '0.875rem',
    'md-sys-typescale-body-medium-weight': weight,
    'md-sys-typescale-body-small-font': font,
    'md-sys-typescale-body-small-line-height': lineHeight('body-small'),
    'md-sys-typescale-body-small-size': '0.75rem',
    'md-sys-typescale-body-small-weight': weight,
    'md-sys-typescale-display-large-font': font,
    'md-sys-typescale-display-large-line-height': lineHeight('display-large'),
    'md-sys-typescale-display-large-size': '3.5625rem',
    'md-sys-typescale-display-large-weight': weight,
    'md-sys-typescale-display-medium-font': font,
    'md-sys-typescale-display-medium-line-height': lineHeight('display-medium'),
    'md-sys-typescale-display-medium-size': '2.8125rem',
    'md-sys-typescale-display-medium-weight': weight,
    'md-sys-typescale-display-small-font': font,
    'md-sys-typescale-display-small-line-height': lineHeight('display-small'),
    'md-sys-typescale-display-small-size': '2.25rem',
    'md-sys-typescale-display-small-weight': weight,
    'md-sys-typescale-headline-large-font': font,
    'md-sys-typescale-headline-large-line-height': lineHeight('headline-large'),
    'md-sys-typescale-headline-large-size': '2rem',
    'md-sys-typescale-headline-large-weight': weight,
    'md-sys-typescale-headline-medium-font': font,
    'md-sys-typescale-headline-medium-line-height':
      lineHeight('headline-medium'),
    'md-sys-typescale-headline-medium-size': '1.75rem',
    'md-sys-typescale-headline-medium-weight': weight,
    'md-sys-typescale-headline-small-font': font,
    'md-sys-typescale-headline-small-line-height': lineHeight('headline-small'),
    'md-sys-typescale-headline-small-size': '1.5rem',
    'md-sys-typescale-headline-small-weight': weight,
    'md-sys-typescale-label-large-font': font,
    'md-sys-typescale-label-large-line-height': lineHeight('label-large'),
    'md-sys-typescale-label-large-size': '0.875rem',
    'md-sys-typescale-label-large-weight': weight,
    'md-sys-typescale-label-medium-font': font,
    'md-sys-typescale-label-medium-line-height': lineHeight('label-medium'),
    'md-sys-typescale-label-medium-size': '0.75rem',
    'md-sys-typescale-label-medium-weight': weight,
    'md-sys-typescale-label-small-font': font,
    'md-sys-typescale-label-small-line-height': lineHeight('label-small'),
    'md-sys-typescale-label-small-size': '11px',
    'md-sys-typescale-label-small-weight': weight,
    'md-sys-typescale-title-large-font': font,
    'md-sys-typescale-title-large-line-height': lineHeight('title-large'),
    'md-sys-typescale-title-large-size': '1.375rem',
    'md-sys-typescale-title-large-weight': weight,
    'md-sys-typescale-title-medium-font': font,
    'md-sys-typescale-title-medium-line-height': lineHeight('title-medium'),
    'md-sys-typescale-title-medium-size': '1rem',
    'md-sys-typescale-title-medium-weight': weight,
    'md-sys-typescale-title-small-font': font,
    'md-sys-typescale-title-small-line-height': lineHeight('title-small'),
    'md-sys-typescale-title-small-size': '0.875rem',
    'md-sys-typescale-title-small-weight': weight
  };
};

export const getTypographyTheme = (): TypographyTheme => ({
  ref: getRefTypographyTokens(),
  sys: getSysTypographyTokens()
});
