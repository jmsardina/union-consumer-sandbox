const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: './src/index.js',
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              hmr: process.env.NODE_ENV !== 'production',
            }
          },
          {
            loader: 'a-css-loader',
            options: {
              dangerouslyUseOwnIdGenerator: false,
            }
          }
        ]
      }
    ]
  }
}