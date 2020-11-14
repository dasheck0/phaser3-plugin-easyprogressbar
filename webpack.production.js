const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const buildDir = './dist';

module.exports = {
  mode: 'production',
  entry: {
    EasyProgressbarPlugin: './src/index.js'
  },
  output: {
    path: path.join(process.cwd(), buildDir),
    filename: '[name].js',
    library: 'EasyProgressbarPlugin',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    auxiliaryComment: `Last build: ${new Date()}`
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include:/\.min\.js$/,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          ecma: 5,
          compress: {},
          warnings: false,
          output: {
            comments: false
          }
        }
      })
    ]
  }
};
