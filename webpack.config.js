const path = require('path');

module.exports = {
  entry: './lib/index.tsx',
  mode: "production",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['awesome-typescript-loader'],
      },
    ],
  },
};