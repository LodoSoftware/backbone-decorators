const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'backbone-decorators.min.js',
    library: 'backbone-decorators',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js'],
    root: [
      path.resolve('./src'),
      path.resolve('./specs')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve('./src'),
          path.resolve('./specs')
        ],
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unused: true
      },
      sourceMap: false,
      minimize: true,
      mangle: true
    })
  ]
}
