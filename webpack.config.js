const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const  koutoSwiss = require( "kouto-swiss" );

// const stylesFile = new ExtractTextPlugin(path.join('/dist/styls.css'))

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    publicPath: path.join('/dist/')
  }
};