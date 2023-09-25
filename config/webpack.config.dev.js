const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: path.resolve(__dirname, '../docs/index.tsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/index.html')
    })
  ],
})