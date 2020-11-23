const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntries = require('webpack-fix-style-only-entries');
const webpack = require('webpack');
const MODE = 'development'; // development | production
const isEnabled = MODE === 'development';
const dist = 'public';

module.exports = {
  watch: true,
  mode: MODE,
  entry: {
    main: './src/js/main.js',
    'main.css': './src/css/main.scss',
  },
  output: {
    path: `${__dirname}/${dist}/js`,
    filename: '[name].js',
  },
  performance: { hints: false },
  module: {
    rules: [
      // Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },

      // ESlint
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },

      // CSS
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${__dirname}/${dist}/css`,
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: isEnabled,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer', { grid: true }],
                  ['postcss-sort-media-queries', { sort: 'desktop-first' }], // mobile-first | desktop-first,
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isEnabled,
            },
          },
          {
            loader: 'import-glob-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntries(),
    new MiniCssExtractPlugin({
      filename: '../css/[name]',
    }),
  ],
};
