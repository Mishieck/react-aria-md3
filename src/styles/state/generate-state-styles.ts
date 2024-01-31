import { SysStateTokens } from '../../types/state';
import { createCssBaseLayer } from '../css/generate-css-code';
import { writeFile } from '../code/write-code';
import { getSysStateTokens } from './get-state-tokens';

export const generateSysStateCssCode = (tokens: SysStateTokens) => {
  const record = Object.entries(tokens).reduce(
    (record, [property, value]) => ({
      ...record,
      [`--${property}`]: value.toString()
    }),
    {} as Record<string, string>
  );

  return createCssBaseLayer([[':root', record]]);
};

const tokens = getSysStateTokens();
const write = writeFile(__dirname);
const filename = 'sys-state-tokens.css';
const code = generateSysStateCssCode(tokens);
console.log({ tokens, code });
await write(filename, code);
