const
  {CleanWebpackPlugin} = require('clean-webpack-plugin'),
  path = require('path'),
  CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode:"production",
  watch: true,
  watchOptions: {
    aggregateTimeout: 600
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "..", "build","uncompressed"),
    filename: 'scripts/inject.js'
  },
  plugins: [
    new CopyPlugin([{
      from: 'asset',
      to: '.'
    }]),
    new CleanWebpackPlugin({
      dry:false,
      cleanOnceBeforeBuildPatterns: ['../**/*'],
      dangerouslyAllowCleanPatternsOutsideProject:true
    })
  ]
};