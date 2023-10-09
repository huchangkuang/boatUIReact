const base = require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: path.resolve(__dirname, '../docs/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: "[name].[chunkhash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/index.html'),
      filename: 'doc.html'
    })
  ]
})