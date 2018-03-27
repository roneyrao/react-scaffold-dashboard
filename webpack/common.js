/**
 * basic configuration for all enviroments;
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const WebpackZipPlugin = require('zip-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const general = {
  bail: true, // exit when error;
  context: CFG.__SRC_DIR__,
  entry: ['bootstrap-sass/assets/javascripts/bootstrap', 'babel-polyfill', CFG.__ENTRY__ || './index.js'],
  output: {
    path: CFG.__OUT_DIR__,
    publicPath: `${CFG.__PUBLIC_PATH__}`,
  },
  resolve: {
    alias: CFG.__ALIAS__,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  forceEnv: 'browser',
                },
              },
              // {
              //   loader: 'eslint-loader',
              //   options: {
              //     emitErrors: true,
              //     failOnError: true, // fail when error;
              //   },
              // },
            ],
          },
          // {
          //   test: /\.html$/,
          //   loader: 'html-loader',
          // },
          {
            test: /\.css$/,
            include: /(bootstrap|common)/, // global and sass
            loaders: ExtractText.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                  },
                },
                'postcss-loader',
                'sass-loader',
              ],
            }),
          },
          {
            test: /\.(css|scss|sass)$/, // global
            include: /node_modules/,
            loaders: ExtractText.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader'],
            }),
          },
          {
            test: /\.css$/, // modules
            include: /src/,
            loaders: ExtractText.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                    module: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                },
                'postcss-loader',
                'sass-loader',
              ],
            }),
          },
          {
            test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
            loader: 'url-loader',
            options: {
              limit: 10,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      failOnError: true,
      syntax: 'scss',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return (
          module.resource &&
          (module.context.indexOf('node_modules') > -1 ||
            module.resource.substr(module.context.length) === '/bootstrap.css')
        );
      },
    }),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
    new webpack.DefinePlugin({ CFG: CFG_STRINGIFIED, 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new ExtractText('[name].css'),
    function BuildDone() {
      this.plugin('done', () => {
        console.log(`bundle are emitted in ${CFG.__OUT_DIR__}`);
      });
    },
  ],
};

if (CFG.zip && !IsDevServer) {
  general.plugins.push(new WebpackZipPlugin({
    filename: `${process.env.npm_package_name}_${CFG_TARGET}.zip`,
  }));
}

module.exports = general;
