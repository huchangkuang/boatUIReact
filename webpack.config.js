const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './lib/index.tsx',
  mode: "production",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: "boatUIReact",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['awesome-typescript-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "boat-UI-React",
      template: "./index.html"
    }),
  ]
};