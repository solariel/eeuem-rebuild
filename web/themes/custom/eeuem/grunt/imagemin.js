'use strict';
module.exports = {
  options: {
    interlaced: false,
    optimizationLevel: 1,
    progressive: false,
    svgoPlugins: [
      {removeViewBox: false},
      {removeEmptyAttrs: false},
      {mergePaths: false},
      {convertShapeToPath: false},
      {sortAttrs: false},
      {transformsWithOnePath: false},
      {removeUnknownsAndDefaults: false},
      {removeUselessStrokeAndFill: false},
      {cleanupIDs: true}
    ]
  },
  dynamic: {
    files: [{
      expand: true,
      flatten: false,
      cwd: 'sources/images',
      src: ['{,**/}*.{png,jpg,gif,svg}'],
      dest: 'sources/tmp/images'
    }]
  }
};
