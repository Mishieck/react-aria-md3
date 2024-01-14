/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import colors from './src/styles/color/tailwind-color-theme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: { colors },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Serif', 'serif']
    }
  },
  plugins: [
    require('tailwindcss-react-aria-components')({ prefix: 'rac' }),
    require('tailwindcss-animate')
  ]
};
