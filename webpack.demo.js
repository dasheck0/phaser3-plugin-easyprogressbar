const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildDir = './dist/demo';

module.exports = {
  mode: 'development',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  entry: {
    app: './demo/index.js'
  },
  output: {
    path: path.join(process.cwd(), buildDir),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(process.cwd(), 'demo/'),
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
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html'
    }),
    new CopyWebpackPlugin([{
      from: path.join(process.cwd(), 'demo', 'assets'),
      to: './assets',
    }]),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    })
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
