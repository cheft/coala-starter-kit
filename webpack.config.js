var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  entry: {
    app: [
      // 'webpack/hot/dev-server',
      path.resolve('./src/app.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'coala-dot-loader'
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
