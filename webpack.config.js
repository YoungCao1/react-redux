var path = require('path');
var webpack = require('webpack');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

var entry = null;
var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
];
if (process.env.NODE_ENV == 'production') {
  entry = [
    './src/index'
  ]
  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );
} else {
  entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    'react-hot-loader/patch',
    './src/index'
  ]
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  devtool: 'eval',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: plugins,
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
      test: /\.js[x]?$/,
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