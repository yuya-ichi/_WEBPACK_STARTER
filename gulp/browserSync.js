//=============
// Plugin
//=============

const browserSync = require('browser-sync');
// const connectPHP = require('gulp-connect-php');

//=============
// Config
//=============

const config = require('./config');

//=============
// Module
//=============

module.exports = {
  name: 'browserSync',
  task: (done) => {
    browserSync.init({
      server: {
        // proxy: "127.0.0.1:8888",
        baseDir: config.dist,
        index: 'index.html',
      },
      port: 8000,
      reloadOnRestart: true,
      startPath: null,
      notify: true,
      open: false,
    });
    done();
  },
  reload: browserSync.reload,
};
