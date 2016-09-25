'use strict';
let path = require('path');

let npmLifecycleEvent = process.env.npm_lifecycle_event || '';
let isSingleRun = npmLifecycleEvent === 'test';

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: 'src/app/test.ts' }
    ],

    preprocessors: {
      'src/app/test.ts': ['webpack', 'sourcemap']
    },

    reporters: ['dots'],

    webpack: require('./webpack.config'),
    webpackServer: { noInfo: true },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    autoWatch: !isSingleRun,
    singleRun: isSingleRun
  });
};
