const resolve = require('path').resolve;
const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
  entry:'./src/index.js',
  output: {
    filename: 'bundle.js',
    path:resolve(__dirname, 'build')
  },
  devServer:{
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    port: 8080,
    inline: true
  },
  plugins:[
    new WebpackBrowserPlugin()
  ]
}