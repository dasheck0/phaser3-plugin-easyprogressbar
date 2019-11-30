const path = require('path');
const webpack = require('webpack');
const moment = require('moment');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildDir = './dist/production';

module.exports = {
  mode: 'production',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(process.cwd(), buildDir),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(process.cwd(), 'src/'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(process.cwd(), 'src', 'assets'),
      to: './assets',
    }]),
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html',
      templateParameters: {
        title: 'Ancient Cave',
        description: `Last update: ${moment().toISOString()}`
      },
      template: 'src/index.ejs'
    }),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new UglifyWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        dependencies: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all',
          name: 'dependencies'
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(process.cwd(), buildDir)
  }
};
