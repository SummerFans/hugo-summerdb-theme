const path = require('path');
const  koutoSwiss = require( "kouto-swiss" );


module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app/main'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      // include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};