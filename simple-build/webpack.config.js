const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new ExtractTextWebpackPlugin({ filename: 'styles.css' }),
  ],
  resolve: {
    extensions: ['.js', '.cssm']
  },
  module: {
    rules: [
      {
        test: /\.cssm$/,
        issuer: /\.jsx?$/,
        use: ExtractTextWebpackPlugin.extract({ use: [] })
      }
    ]
  }
}