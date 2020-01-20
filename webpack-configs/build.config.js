const 
  {CleanWebpackPlugin} = require('clean-webpack-plugin'),
  path = require('path'),
  name = require(path.resolve(__dirname, "..",'package.json')).name,
  CopyPlugin = require('copy-webpack-plugin'),
  ZipPlugin = require('zip-webpack-plugin');
module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    auxiliaryComment: 'Tool adapted by dbl@wemass from https://chrome.google.com/webstore/detail/appnexus-creative-inserti/ailiopjkbojmmdflhbcedndlomhmhkbk',
    path: path.resolve(__dirname, "..", "build", "uncompressed"),
    filename: 'scripts/inject.js'
  },
  plugins: [
    new CopyPlugin([{
      from: 'asset',
      to: '.'
    }]),
    new ZipPlugin({
      path: "../zip",
      filename: `${name}.zip`
    }),
    new CleanWebpackPlugin({
      dry:false,
      cleanOnceBeforeBuildPatterns: ['../**/*'],
      dangerouslyAllowCleanPatternsOutsideProject:true
    })
  ]
};