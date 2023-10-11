const path = require('path');

module.exports = {
  entry: './lib/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/lib'),
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
        rules: [
          {
            loader: 'svg-sprite-loader',
            options: {}
          },
          {
            loader: "svgo-loader",
            options: {
              plugins: [{
                name: 'removeAttrs',
                params: {
                  attrs: 'fill'
                }
              }]
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.ico$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // maxSize: imageInlineSizeLimit,
          },
        },
      },
      {
        test: [/\.scss$/, /\.css$/],
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: "sass-resources-loader",
          options: {
            resources: './lib/style/common.scss'
          }
        }]
      }
    ],
  },
};