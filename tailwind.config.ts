/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/color/tailwind-color-theme');
const reactAriaComponents = require('tailwindcss-react-aria-components');
const animate = require('tailwindcss-animate');

module.exports = {
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
  plugins: [reactAriaComponents({ prefix: 'rac' }), animate]
};
