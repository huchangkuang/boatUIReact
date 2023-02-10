const path = require('path');

module.exports = {
  entry: './lib/index.tsx',
  mode: "production",
  output: {
    filename: 'main.js',
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
};