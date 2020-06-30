'use strict';
module.exports = function (grunt) {
  return {
    options: {
      livereload: true,
      spawn: false,
      interrupt: true,
      debounceDelay: 400,
      dateFormat: function (time) {
        var date = new Date();
        grunt.log.writeln('Task finished in ' + time + 'ms at ' + date.toLocaleDateString());
      }
    },
    fonts: {
      files: ['sources/fonts/{,**/}*.{eot,otf,svg,ttf,woff,woff2}'],
      tasks: ['fonts', 'notify:fonts']
    },
    images: {
      files: ['sources/images/{,**/}*.{png,jpg,gif,svg}'],
      tasks: ['images', 'notify:images']
    },
    sass: {
      files: ['sources/sass/{,**/}*.{scss,sass}'],
      tasks: ['css', 'notify:css']
    },
    registry: {
      files: ['{,**/}*.yml', '{,**/}*.{php,inc}', '*.theme'],
      tasks: ['cr', 'notify:cr']
    },
    js: {
      files: ['sources/js/{,**/}*.js', '!sources/js/{,**/}*.min.js'],
      tasks: ['js', 'notify:js']
    }
  };
};
