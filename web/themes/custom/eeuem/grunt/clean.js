'use strict';
module.exports = {
  vendor: ['sources/vendor/{,**/}*', '!sources/vendor/README.md'],

  tmp_images: ['sources/tmp/images', '!sources/tmp/images/README.md'],
  tmp_css: ['sources/tmp/css', '!sources/tmp/css/README.md'],
  tmp_js: ['sources/tmp/js', '!sources/tmp/js/README.md'],
  tmp: ['sources/tmp/{,**/}*', '!sources/tmp/README.md'],

  prod_lib: ['assets/libraries/{,**/}*', '!assets/libraries/README.md'],
  prod_vendor: ['assets/vendor/{,**/}*', '!assets/vendor/README.md'],
  prod_images: ['assets/images/{,**/}*', '!assets/images/README.md'],
  prod_fonts: ['assets/fonts/{,**/}*', '!assets/fonts/README.md'],
  prod_css: ['assets/css/{,**/}*', '!assets/css/README.md'],
  prod_js: ['assets/js/{,**/}*', '!assets/js/README.md'],
  prod: [
    'assets/*/',
    '!assets/{images/,fonts/,css/,js/,vendor/,libraries/}',
    'assets/{images/,fonts/,css/,js/,vendor/,libraries/}*/',
    'assets/{images/,fonts/,css/,js/,vendor/,libraries/}*.*',
    '!assets/{images/,fonts/,css/,js/,vendor/,libraries/}README.md'
  ]
};

