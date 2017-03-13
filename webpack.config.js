var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css', '.jsx', '.less'],
    alias: {
      'redux-devtools': path.join(__dirname, 'dev-tools'),
      'react': path.join(__dirname, 'node_modules', 'react')
    }
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'dev-tools')
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader"
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'url?limit=8024&name=images/[name].[ext]'
    }]
  }
};