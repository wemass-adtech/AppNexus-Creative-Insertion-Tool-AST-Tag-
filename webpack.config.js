const
  path = require('path'),
  CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'inject.js'
  },
  // module: {
  //   rules: [
  //     { test: /\.js$/, use: 'raw-loader' }
  //   ]
  // }  ,
  plugins: [
    new CopyPlugin([{
      from: 'asset',
      to: '.'
    }]),
  ]
  //,
  // module: {
  //   rules: [{
  //     test: /\.(png|json|js)$/i,
  //     use: [{
  //       loader: "file-loader?name=[name].[ext]!extract-loader!html-loader",
  //       options: {
  //         //publicPath: path.resolve(__dirname, 'asset'),
  //         //outputPath: path.resolve(__dirname, 'dist'),
  //         //name:"dest/[name][ext]"
  //         include: path.resolve(__dirname, 'asset')
  //       }
  //     }]
  //   }]
  // }
};