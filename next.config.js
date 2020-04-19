const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withSass({
    webpack(config) {
      config.resolve.alias['~'] = path.resolve(__dirname);
      config.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      });
      return config;
    },
  }),
);
