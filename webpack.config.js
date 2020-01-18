const
  name = require('./package.json').name,
  path = require('path'),
  CopyPlugin = require('copy-webpack-plugin'),
  ZipPlugin = require('zip-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist',"raw"),
    filename: 'inject.js'
  },
  plugins: [
    new CopyPlugin([{
      from: 'asset',
      to: '.'
    }]),
    new ZipPlugin({
      path:"../zip",
      filename: `${name}.zip`
    })
  ]
};