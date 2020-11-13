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

const tasks = [
  require('./gulp/tasks/copy'),
  require('./gulp/tasks/images'),
  //require('./gulp/tasks/ejs'),
];

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
  tasks.forEach((task) => {
    if (task.watch) task.watch(reload, tasks);
  });
  gulp.watch(reloadTargets, reload);
};

//=-=-=-=-=-=-=-
// CLI
//=-=-=-=-=-=-=-

tasks.forEach((task) => {
  if (task.cli) task.cli(tasks);
});

gulp.task('default', gulp.series(browserSync.task, watch));
gulp.task('rebuild', gulp.series(clean, gulp.parallel(tasks[0].task, tasks[1].task)));
