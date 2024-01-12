import {
  argbFromHex,
  CustomColor,
  hexFromArgb,
  themeFromSourceColor,
  TonalPalette
} from '@material/material-color-utilities';
import { MainColorTone, RefColor } from '@/types/colors';

const tones: Array<MainColorTone> = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100
] as const;

// const generateTones = <Name extends string>(name: Name, hexColor: string, colorTones = tones): Record<RefColor<Name, (typeof colorTones)[number]>> => {
//   return themeFromSourceColor(argbFromHex(hexColor), []);
// }

type T = CustomColor;

const theme = themeFromSourceColor(argbFromHex('#6750A4'), [
  { name: 'warning', value: argbFromHex('#00FFFF'), blend: true }
]);

const primaryHex = hexFromArgb(theme.schemes.light.primary);
console.log(JSON.stringify(theme, null, 2), { primaryHex });
