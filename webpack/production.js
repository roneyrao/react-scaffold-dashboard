/*
* production specific configs;
*/

const webpack = require('webpack');

const production = {
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      sourceMap: true,
    }),
  ],
};

const helper = require('webpack-devserver-helper'); // eslint-disable-line 
let mockCfg;

// github
if (CFG.__MOCK__) {
  mockCfg = helper.parseMockConfig(CFG.__MOCK__);
  const CopyPlugin = require('copy-webpack-plugin');
  production.plugins.push(new CopyPlugin([{
    from: mockCfg.folder,
    to: mockCfg.folder,
  }]));
}
module.exports = production;
