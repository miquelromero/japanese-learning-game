module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer'),
    require('postcss-import-url'),
    require('postcss-nested'),
  ],
};
