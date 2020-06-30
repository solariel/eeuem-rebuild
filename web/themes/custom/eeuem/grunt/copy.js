'use strict';
module.exports = {
  fonts: {
    expand: true,
    cwd: 'sources/fonts',
    src: '{,**/}*.{eot,otf,svg,ttf,woff,woff2}',
    dest: 'assets/fonts'
  },
  images: {
    expand: true,
    cwd: 'sources/tmp/images',
    src: '**',
    dest: 'assets/images'
  },
  css: {
    expand: true,
    cwd: 'sources/tmp/css',
    src: '**',
    dest: 'assets/css'
  },
  js: {
    expand: true,
    cwd: 'sources/tmp/js',
    src: '**',
    dest: 'assets/js'
  },
  libraries: {
    expand: true,
    cwd: 'sources/libraries',
    src: '**',
    dest: 'assets/libraries'
  },
  vendors: {
    expand: true,
    cwd: 'sources/vendor',
    src: '**',
    dest: 'assets/vendor'
  }
};
