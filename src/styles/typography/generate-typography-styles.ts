import path from 'path';
import { createCssBaseLayer } from '../css/generate-css-code';
import { getTypographyTheme } from './get-typography-theme';
import { writeFile } from '../code/write-code';

export const generateCssTypographyCode = (tokens: Record<string, string>) => {
  const styleRecord = Object.entries(tokens).reduce(
    (record, [property, value]) => ({
      ...record,
      [`--${property}`]: value
    }),
    {}
  );

  return createCssBaseLayer([[':root', styleRecord]]);
};

const theme = getTypographyTheme();
const cssRefTokens = generateCssTypographyCode(theme.ref);
const cssSysTokens = generateCssTypographyCode(theme.sys);
const write = writeFile(__dirname);

await write('ref-typography-tokens.css', cssRefTokens);
await write('sys-typography-tokens.css', cssSysTokens);
