const gulp = require('gulp');
const del = require('del');
const browserSync = require('./gulp/browserSync');

//=-=-=-=-=-=-=-
// Config
//=-=-=-=-=-=-=-

const config = require('./gulp/config');
const reloadTargets = config.dist + '**/*.{html,css,js}';

//=-=-=-=-=-=-=-
// Task
//=-=-=-=-=-=-=-

const tasks = {
  copy: require('./gulp/tasks/copy'),
  images: require('./gulp/tasks/images'),
  // js: require('./gulp/tasks/js_include'),
  // ejs: require('./gulp/tasks/ejs'),
};

const clean = () => {
  return del(config.dist);
};

//=-=-=-=-=-=-=-
// watch
//=-=-=-=-=-=-=-

const watch = () => {
  reload = (done) => {
    browserSync.reload();
    done();
  };
  for (let key in tasks) {
    let task = tasks[key];
    if (task.watch) task.watch(reload, tasks);
  }
  gulp.watch(reloadTargets, reload);
};

//=-=-=-=-=-=-=-
// CLI
//=-=-=-=-=-=-=-

const buildTasks = Object.keys(tasks).map((task) => {
  if (task.cli) task.cli(tasks);
  return tasks[task].task;
});

gulp.task('default', gulp.series(clean, gulp.parallel(buildTasks), browserSync.task, watch));
