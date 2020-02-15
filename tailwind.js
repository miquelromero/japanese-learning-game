module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        // Generated with https://github.com/javisperez/tailwindcolorshades
        primary: {
          100: '#FBEDEC',
          200: '#F6D2CE',
          300: '#F0B7B1',
          400: '#E48077',
          500: '#D94A3C',
          600: '#C34336',
          700: '#822C24',
          800: '#62211B',
          900: '#411612',
        },
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    borderWidth: ['last'],
    backgroundColor: ['active'],
    textColor: ['active'],
    borderColor: ['active'],
    outline: ['focus'],
  },
  plugins: [],
};
