'use strict';

const sass = require('node-sass');
var hexdigest = require('hexdigest');
var nodeSassAssetFunctions = require('node-sass-asset-functions');
const globImporter = require('node-sass-glob-importer');

module.exports = {
  options: {
    outputStyle: 'compact',
    precision: 8,
    sourceComments: false,
    sourceMap: true,
    implementation: sass,
    importer: globImporter(),

    includePaths: [
      // Include necessary node modules.
      'node_modules/node-normalize-scss',
      'node_modules/sass-toolkit/stylesheets',
      'node_modules/breakpoint-sass/stylesheets',
      // Include self for access to files via package name.
      'sources/sass/eeuem',
      // Include boostrapper for vendors and defaults.
      '../../contrib/bootstrapper/sources/sass'
    ],

    functions: nodeSassAssetFunctions({
      images_path: 'assets/images',
      fonts_path: 'assets/fonts',
      http_images_path: '../images',
      http_fonts_path: '../fonts',
      asset_cache_buster: function (http_path, real_path, done) {
        hexdigest(real_path, 'md5', function (err, digest) {
          if (err) { done('0000000000'); }
          else { done(digest.substring(0, 10)); }
        });
      }
    })
  },

  dev: {
    options: {
      outputStyle: 'expanded',
      implementation: sass,
      sourceComments: true
    },
    files: [
      {
        expand: true,
        flatten: false,
        cwd: 'sources/sass/eeuem',
        src: ['{,**/}*.{scss,sass}'],
        dest: 'sources/tmp/css',
        ext: '.css',
        extDot: 'last'
      }
    ]
  },

  prod: {
    files: [
      {
        expand: true,
        flatten: false,
        cwd: 'sources/sass/eeuem',
        src: ['{,**/}*.{scss,sass}'],
        dest: 'sources/tmp/css',
        ext: '.css',
        extDot: 'last'
      }
    ]
  }
};
