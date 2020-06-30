'use strict';
module.exports = function () {
  // Set postcss maps configuration.
  var maps = {
    inline: false,
    sourcesContent: false
  };

  // Set postcss parser configuration.
  var safeParser = require('postcss-safe-parser');

  // Set variables with postcss plugins and their configuration.
  var doiuse = require('doiuse')({
    browsers: [
      '> 1%',
      'last 3 versions',
      'not ie <= 11',
      'not ie_mob <= 11',
      'not op_mob <= 46',
      'not op_mini all',
      'not Baidu < 8',
      'not bb < 11',
      'not android < 56'
    ],
    ignore: [
      'viewport-units',
      'text-size-adjust',
      'css-appearance',
      'css-filters',
      'css-masks',
      'css-featurequeries',
      'css-sticky',
      'css-clip-path',
      'css-resize',
      'css-touch-action',
      'transforms3d',
      'flexbox',
      'will-change',
      'multicolumn',
      'pointer'
    ],
    ignoreFiles: []
  });

  var willchange = require('postcss-will-change');

  var sorting = require('postcss-sorting')({
    'sort-order': 'default'
  });

  var sorting_mq = require('postcss-sort-media-queries')({
    sort: 'mobile-first'
  });

  var autoprefixer = require('autoprefixer')({
    overrideBrowserslist: ['last 10 versions', 'not ie < 11'],
    cascade: false
  });

  var pxtorem = require('postcss-pxtorem')({
    rootValue: 16,
    unitPrecision: 5,
    replace: true,
    // propWhiteList: ['height', 'border', 'border-width', 'font', 'font-size', 'line-height', 'letter-spacing'],
    propWhiteList: [],
    selectorBlackList: [/^html$/],
    mediaQuery: true,
    minPixelValue: 0
  });

  var cssnano = require('cssnano')({
    safe: true,
    mergeLonghand: false,
    minifyFontValues: false,
    discardUnused: false,
    zindex: false,
    reduceIdents: false,
    mergeIdents: false
  });

  var reporter = require('postcss-reporter');

  // Create configuration array for default postcss processing.
  var postcssDefaultOptions = {
    map: maps,
    parser: safeParser,
    processors: [
      doiuse,
      willchange,
      sorting,
      sorting_mq,
      autoprefixer,
      pxtorem,
      reporter
    ]
  };

  // Create configuration array for postcss processing with minification.
  var postcssNanoOptions = {
    map: maps,
    parser: safeParser,
    processors: [
      doiuse,
      willchange,
      sorting,
      sorting_mq,
      autoprefixer,
      pxtorem,
      cssnano,
      reporter
    ]
  };

  return {
    default: {
      options: postcssDefaultOptions,
      expand: true,
      src: 'sources/tmp/css/{,**/}*.css'
    },

    nano: {
      options: postcssNanoOptions,
      expand: true,
      src: 'sources/tmp/css/{,**/}*.css'
    }
  };
};
