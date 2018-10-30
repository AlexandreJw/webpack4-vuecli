/**
 * Create by tommy on 2018/10/19
 */
const webpackConfig = require('./webpack.config')
const path = require('path')
const merge = require('webpack-merge') /// webpack merge
const MiniCssExtractPlugin = require('mini-css-extract-plugin') ///css提取
const CleanWebpackPlugin = require('clean-webpack-plugin') /// 打包之前删除dist
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') /// css压缩
const WebpackBuildNotifierPlugin = require('webpack-build-notifier') /// 打包结束的弹窗提示
const setTitle = require('node-bash-title') /// 改变提示
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin') /// 显示进度
const postcssPresetEnv = require('postcss-preset-env')
const smp = new SpeedMeasurePlugin()
const config = require('./config')
setTitle('正在打包正式环境')
const webpackProdConfig = merge(webpackConfig, {
  output: {
    path: config.get('assertRoot'),
    filename: 'javascript/[name].[contenthash:5].js',
    publicPath: './'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function () {
                return postcssPresetEnv({
                  stage: 0,
                  features: {
                    'nesting-rules': true
                  }
                })
              }
            }
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function () {
                return postcssPresetEnv({
                  stage: 0,
                  features: {
                    'nesting-rules': true
                  }
                })
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'styles/[name].[contenthash:5].css'}),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {discardComments: {removeAll: true}}],
      },
      canPrint: true
    }),
    new CleanWebpackPlugin('dist', {
      root: path.join(__dirname, '..'),
      verbose: true,
      dry: false
    }),
    new WebpackBuildNotifierPlugin({
      title: 'tommy vue build:',
      logo: path.resolve('./build/webpackSuccess.jpeg'),
      suppressSuccess: true
    })
  ]
})
module.exports = smp.wrap(webpackProdConfig)