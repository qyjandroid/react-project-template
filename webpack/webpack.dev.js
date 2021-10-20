const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const variable = require('./webpackUtils/variable');

const { DIST_PATH } = variable;
//引入
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const config = {
  mode: 'development',
  cache: { type: 'memory' },
  devtool: 'eval-cheap-module-source-map',
  stats: 'errors-only',
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    open: 'chrome',
    contentBase: DIST_PATH,
    compress: true, //是否启用gzip压缩
    publicPath: '/',
    host: 'localhost',
    port: 9093,
    hot: true,
    disableHostCheck: true,
    stats: 'errors-only',
    proxy: {
      // "/service": {
      //     target: "http://localhost:3000"
      // }
    },
  },
};
const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;
