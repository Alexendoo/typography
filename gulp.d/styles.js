const gulp        = require('gulp');
const sass        = require('gulp-sass');
const del         = require('del');
const runSequence = require('run-sequence');

gulp.task('styles:watch', () => {
  gulp.watch(global.config.src + '/**/*.scss', ['styles']);
});

gulp.task('styles', () => {
  return gulp.src(global.config.src + '/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(global.config.dest));
});
