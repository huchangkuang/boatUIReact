const base = require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: './docs/index.tsx',
  output: {
    filename: 'index.html',
    path: path.resolve(__dirname, '../build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/index.html'
    })
  ],
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
    },
  },
})