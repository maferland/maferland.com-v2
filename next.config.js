const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

module.exports = withCSS(
  withSass(
    withPurgeCss({
      webpack(config) {
        config.resolve.alias['~'] = path.resolve(__dirname);
        config.module.rules.push({
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000',
        });
        return config;
      },
    }),
  ),
);
