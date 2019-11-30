const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

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
    new CleanWebpackPlugin(),
    new UglifyWebpackPlugin({
      include: /\.min\.js$/,
      parallel: true,
      sourceMap: false,
      uglifyOptions: {
        compress: true,
        ie8: false,
        ecma: 5,
        output: {
          comments: false
        },
        warnings: false
      },
      warningsFilter: (src) => false
    })
  ]
};
