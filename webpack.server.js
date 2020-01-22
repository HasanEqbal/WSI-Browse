const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Visualizer = require('webpack-visualizer-plugin')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',

  mode: 'development',

  node: {
    __dirname: false
  },

  entry: './server/index.js',

  output: {
    filename: 'server-bundle.js',
    path: path.resolve(__dirname, 'dist/server')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sc|c)ss$/,
        use: 'null-loader'
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  externals: [webpackNodeExternals()],

  plugins: []
};

module.exports = config;
