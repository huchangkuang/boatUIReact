const base = require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require('fs')

const outPath = path.resolve(__dirname, '../build')
if (fs.existsSync(outPath)) {
  fs.rmSync(outPath, {recursive: true})
}

module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: path.resolve(__dirname, '../docs/index.tsx'),
  output: {
    path: outPath,
    filename: "[name].[chunkhash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../docs/index.html'),
      filename: 'doc.html'
    })
  ]
})