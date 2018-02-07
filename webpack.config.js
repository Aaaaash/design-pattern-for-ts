var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // change to .tsx if necessary
  entry: './example/app.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: [".ts", ".ts", ".js", ".js"]
  },
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
      { test: /\.(t|j)s?$/, use: { loader: 'awesome-typescript-loader' } },
      // addition - add source-map support 
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output management',
      template: 'index.html',
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: '1234',
  },
  devtool: 'source-map',
  // addition - add source-map support
  devtool: "source-map"
}
