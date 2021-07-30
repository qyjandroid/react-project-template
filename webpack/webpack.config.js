/*
 * @Author: quanyj 
 * @Date: 2021-07-30 16:03:43 
 * @Last Modified by: quanyj
 * @Last Modified time: 2021-07-30 16:09:32
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ProgressPlugin } = require('webpack')

export const DIST_PATH = path.resolve(__dirname, "../../", "dist");
export const SRC_PATH = path.resolve(__dirname, "../../", "src");
export const PUBLIC_PATH = path.resolve(__dirname, "../../", "public");
export const ROOT_PATH = path.resolve(__dirname, "../../");


module.exports = {
  mode: "development",
  entry: path.join(SRC_PATH, "./index.tsx"),
  devServer: {
    stats: 'errors-only',
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    historyApiFallback: true,
    compress: true,
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: require.resolve('babel-loader')
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'tpl/index.html'
    }),
  ]
};