const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      red: {
        200: '#FF99B1',
        400: '#f43f5e',
      },
      gray: colors.coolGray,
      white: colors.white,
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      display: ['Oswald', 'Open Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
