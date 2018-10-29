const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
  template: 'src/index.html'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [htmlWebpack],
  module: {
    rules: [
      {
        test: '/.css$/',
        use: 'css-loader'
      }
    ]
  },
  mode: process.env.NODE_ENV
};
