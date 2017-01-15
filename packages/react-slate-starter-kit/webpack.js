var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (projectPath) {
  return {
    devtool: 'eval-source-map',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      path.join(projectPath, 'starter.jsx')
    ],
    output: {
      path: path.join(projectPath, '/'),
      filename: '[name].js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(projectPath, 'index.html'),
        inject: 'body',
        filename: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ],
    resolve: {
      modulesDirectories: [path.join(__dirname, './node_modules'), "web_modules", "node_modules"]
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"]
        }
      }, {
        test: /\.json?$/,
        loader: 'json'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css'
      }]
    }
  };
}