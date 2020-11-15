//=-=-=-=-=-=-=-
// Plugin
//=-=-=-=-=-=-=-

const gulp = require('gulp');

//=-=-=-=-=-=-=-
// Config
//=-=-=-=-=-=-=-

const config = require('../config');

const paths = {
  src: [config.src + '**/*.{html,css,json,txt}'],
  dest: config.dist,
};

//=-=-=-=-=-=-=-
// Module
//=-=-=-=-=-=-=-

module.exports = {
  task: function copy() {
    return gulp.src(paths.src, { since: gulp.lastRun(module.exports.task) }).pipe(gulp.dest(paths.dest));
  },
  watch: (reload) => {
    gulp.watch(paths.src).on('change', module.exports.task);
    gulp.watch(paths.src).on('add', module.exports.task);
  },
  cli: () => {
    gulp.task('copy', module.exports.task);
  },
};
