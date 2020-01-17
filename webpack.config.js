const path = require('path');
module.exports = {
  mode:"none",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'inject.js'
  },

  module: {
    rules: [
      {
       test: /\.(png|json|jpe?g|gif)$/i,
       loader:"file-loader",
       options: {
        publicPath: path.resolve(__dirname, 'dist'),
      }
      }
    ]
  }
};