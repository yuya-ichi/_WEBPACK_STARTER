//=============
// Plugin
//=============

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const gulpIf = require('gulp-if');
const cleanCSS = require('gulp-clean-css');
const header = require('gulp-header');
const replace = require('gulp-replace');
const wait = require('gulp-wait');

//=============
// Config
//=============

const config = require('../config');

const paths = {
  watch: config.src + '**/*.scss',
  src: config.src + '**/!(_)*.scss',
  dest: config.dist
};

//=============
// Module
//=============

module.exports = {
  name: 'sass',
  task: () => {
    return gulp.src(paths.src)
      // .pipe(wait(200))
      .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(gulpIf(config.isCompress, cleanCSS()))
      .pipe(gulpIf(config.isCompress, rename({ suffix: '.min', })))
      .pipe(replace(/@charset "UTF-8";/g, ''))
      .pipe(header('@charset "UTF-8";\n'))
      .pipe(gulp.dest(paths.dest, gulpIf(config.isExportMap, { sourcemaps: './', })))
  },
  watch: (reload) => {
    gulp.watch(paths.watch).on('change', gulp.series(module.exports.task, reload))
  }
};
