const webpack = require('webpack');
const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const webpackConfig = withCSS(
  withSass({
    webpack(config) {
      config.resolve.alias['~'] = path.resolve(__dirname);

      // URL Loader
      config.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      });

      // Ignore not loaded locale
      config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

      return config;
    },
  }),
);

module.exports = withBundleAnalyzer(webpackConfig);
