//=============
// Plugin
//=============

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');

//=============
// Config
//=============

const config = require('../config');

const paths = {
  src: config.src + '**/!(_)*.ejs',
  dest: config.dist,
};

//=============
// Module
//=============

module.exports = {
  name: 'ejs',
  task: () => {
    return gulp
      .src(paths.src)
      .pipe(plumber({ errorHandler: notify.onError({ title: 'EJS error', message: '<%= error.message %>' }) }))
      .pipe(ejs())
      .pipe(rename({ extname: '.html' }))
      .pipe(gulp.dest(paths.dest));
  },
  watch: (reload) => {
    gulp.watch(paths.src).on('change', gulp.series(module.exports.task, reload));
  },
};
