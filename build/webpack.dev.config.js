/**
 * Create by tommy on 2018/10/19
 */
const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const setTitle = require('node-bash-title'); /// 改变提示
setTitle('正在运行测试环境');
const devWebpackConfig = merge(webpackConfig, {
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ],
      },
    ]
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 9000,
    open: true,
    overlay: {warnings: false, errors: true },
    proxy: {},
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
module.exports = devWebpackConfig