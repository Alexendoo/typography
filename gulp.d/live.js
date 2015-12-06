const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('live', () => {
  browserSync.init({
    server: global.config.dest
  });
  gulp.watch(global.config.dest + '**/*').on('change', browserSync.reload);
});
