const path = require('path');

module.exports = {
  pwa: {
    themeColor: '#d94a3c',
  },
  configureWebpack: {
    resolve: {
      alias: {
        icons: path.resolve(
          __dirname,
          'node_modules/vue-material-design-icons',
        ),
      },
    },
  },
};
