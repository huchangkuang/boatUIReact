const base = require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

const outPath = path.resolve(__dirname, '../dist')
if (fs.existsSync(outPath)) {
  fs.rmSync(outPath, {recursive: true})
}
module.exports = Object.assign({}, base, {
  mode: 'production',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    }
  },
})