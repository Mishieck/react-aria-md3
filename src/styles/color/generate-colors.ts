import {
  CssColorTheme,
  CssRefColorScheme,
  CssSysColorScheme,
  TailwindColorTheme
} from '@/types/colors';
import { alertCustomColors, getColorTheme } from './get-color-theme';
import { getCssColorTheme } from './get-css-color-theme';
import { getTailwindColorTheme } from './get-tailwind-color-theme';

type LayerStyles = [selector: string, styles: Record<string, string>];

export const createCssBaseLayer = (styles: Array<LayerStyles>) =>
  `@layer base {\n${styles
    .map(
      ([selector, styles]) =>
        `  ${selector}{\n${Object.entries(styles)
          .map(([property, value]) => `    ${property}: ${value};`)
          .join('\n')}\n  }`
    )
    .join('\n')}\n}`;

export const createCssRefCode = (scheme: CssRefColorScheme) =>
  createCssBaseLayer([[':root', scheme]]);

export const createCssSysCode = (
  dark: CssSysColorScheme,
  light: CssSysColorScheme
) =>
  createCssBaseLayer([
    [':root', light],
    ['.dark', dark]
  ]);

export const createTailwindTonesCode = (record: Record<string, string>) =>
  `{\n  ${Object.entries(record)
    .map(([property, value]) => `    '${property}': '${value}',`)
    .join('\n')}\n  }`;

export const createTailwindCode = (theme: TailwindColorTheme) => {
  return `module.exports = {\n${Object.entries(theme)
    .map(
      ([property, value]) =>
        `  '${property}': ${
          typeof value === 'object'
            ? createTailwindTonesCode(value)
            : `'${value}'`
        },`
    )
    .join('\n')}\n};`;
};

// const primaryHex = hexFromArgb(theme.schemes.light.primary);
const theme = getColorTheme('#6750A4', alertCustomColors);
const cssTheme = getCssColorTheme(theme);
const cssRefCode = createCssRefCode(cssTheme.ref);
const cssSysCode = createCssSysCode(cssTheme.sys.dark, cssTheme.sys.light);
const tailwindTheme = getTailwindColorTheme<never>(theme);
const tailwindCode = createTailwindCode(tailwindTheme);
await Bun.write('./src/styles/ref-color-tokens.css', cssRefCode);
await Bun.write('./src/styles/sys-color-tokens.css', cssSysCode);
await Bun.write('./src/styles/tailwind-color-theme.js', tailwindCode);

console.log({
  theme,
  // cssTheme: JSON.stringify(cssTheme, null, 2),
  // cssRefCode,
  // cssSysCode,
  tailwindCode
});
