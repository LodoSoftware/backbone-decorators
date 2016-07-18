var mainWebpackConfig = require('./webpack.config.js');
var testWebpackConfig = Object.assign({}, mainWebpackConfig, {
  devtool: 'inline-source-map',
  entry: {},
  plugins: [],
  output: {}
});

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'chai-jquery', 'sinon-chai'],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],
    singleRun: true,
    autoWatchBatchDelay: 300,

    files: [
      './node_modules/jquery/dist/jquery.min.js',
      './specs/index.js'
    ],

    preprocessors: {
      './specs/index.js': ['webpack', 'sourcemap']
    },

    webpack: testWebpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    }
  });
};
