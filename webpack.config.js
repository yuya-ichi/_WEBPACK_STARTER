const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const MODE = 'development'; // development | production
const isEnabled = MODE === 'development';
const dist = 'public';

module.exports = {
  watch: true,
  mode: MODE,
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/${dist}/js`,
    filename: 'main.js',
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

      // ASSETS file-loader
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '../img/[name].[ext]',
      //     },
      //   },
      // },

      // ASSETS url-loader
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   loader: 'url-loader',
      // },

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
    new MiniCssExtractPlugin({
      path: `${__dirname}/${dist}/css`,
      filename: '../css/[name].css',
      ignoreOrder: true,
    }),
  ],
};
