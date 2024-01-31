import { ColorTheme, TailwindColorTheme } from '../../types/colors';

const refPrefix = 'md-ref';
const sysPrefix = 'md-sys';

const getTailwindColorRecord = <Rec extends Record<string, string>>(
  prefix: string,
  color: string,
  record: Rec
) => {
  return Object.entries(record).reduce(
    (record, [name]) => ({
      ...record,
      [name]: `var(--${prefix}-color-${color}-${name})`
    }),
    {}
  );
};

export const getTailwindColorTheme = <CustomName extends string = never>(
  inputTheme: ColorTheme<CustomName>
) => {
  const { black, white, ...mainTones } = inputTheme.ref;

  const theme: Partial<TailwindColorTheme<CustomName>> = Object.entries(
    mainTones
  ).reduce(
    (theme, [name, value]) => ({
      ...theme,
      [`${refPrefix}-color-${name}`]: getTailwindColorRecord(
        refPrefix,
        name,
        value
      )
    }),
    {}
  );

  Object.assign(
    theme,
    Object.entries(inputTheme.sys.dark).reduce(
      (theme, [name]) => ({
        ...theme,
        [`${sysPrefix}-color-${name}`]: `var(--${sysPrefix}-color-${name})`
      }),
      theme
    )
  );

  return theme as TailwindColorTheme<CustomName>;
};
