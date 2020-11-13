//=-=-=-=-=-=-=-
// Plugin
//=-=-=-=-=-=-=-

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

//=-=-=-=-=-=-=-
// Config
//=-=-=-=-=-=-=-

const config = require('../config');

const paths = {
  src: config.src + '**/*.{png,jpg,jpeg,gif,svg}',
  dest: config.dist,
};

const minOpts = [
  imagemin.gifsicle(),
  imagemin.mozjpeg(),
  pngquant({
    quality: [0.6, 0.85],
    speed: 1,
  }),
  imagemin.svgo({ plugins: [{ removeViewBox: true }, { cleanupIDs: false }] }),
];

//=-=-=-=-=-=-=-
// Module
//=-=-=-=-=-=-=-

module.exports = {
  task: function imageCompression() {
    return gulp
      .src(paths.src, { since: gulp.lastRun(module.exports.task) })
      .pipe(imagemin(minOpts))
      .pipe(gulp.dest(paths.dest));
  },
  watch: (reload) => {
    gulp.watch(paths.src).on('change', module.exports.task);
    gulp.watch(paths.src).on('add', module.exports.task);
  },
  cli: () => {
    gulp.task('images', module.exports.task);
  },
};
