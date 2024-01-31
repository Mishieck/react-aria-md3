import colors from '../styles/color/tailwind-color-theme';

export const tailwindComponentConfig = {
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