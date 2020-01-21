const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    'webpack-hot-middleware/client',
    './src/Index.jsx'
  ],

  mode: 'development',

  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.(js|jsx)$/,
      use: 'react-hot-loader/webpack',
      include: /node_modules/
    },
    {
      test: /\.(sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpeg|jpg|svg)$/,
      loader: 'url-loader',
      options: {
        name: "images/[hash].[ext]"
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: "fonts/[hash].[ext]"
      }
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: "fonts/[hash].[ext]"
      }
    }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false
};

module.exports = config;
