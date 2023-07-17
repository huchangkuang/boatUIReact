const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './lib/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: "boatUIReact",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "boat-UI-React",
      template: "./index.html"
    }),
  ]
};