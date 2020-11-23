//=============
// Plugin
//=============

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const eslint = require('gulp-eslint');
const include = require('gulp-include');
const babel = require('gulp-babel');

//=============
// Config
//=============

const config = require('../config');

const paths = {
  watch: config.src + 'js/**/*.js',
  src: config.src + 'js/**/!(_)*.js',
  dest: config.dist + 'js/',
};

//=============
// Module
//=============

module.exports = {
  name: 'js',
  task: () => {
    return (
      gulp
        .src(paths.src)
        .pipe(include())
        .on('error', console.log)
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(eslint({ useEslintrc: true }))
        .pipe(eslint.format())
        // .pipe(eslint.failAfterError())
        .pipe(gulp.dest(paths.dest))
    );
  },
  watch: (reload) => {
    gulp.watch(paths.watch).on('change', module.exports.task);
    gulp.watch(paths.watch).on('add', module.exports.task);
  },
};
