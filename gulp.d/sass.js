const gulp        = require('gulp');
const sass        = require('gulp-sass');
const del         = require('del');
const runSequence = require('run-sequence');
const rename      = require("gulp-rename");


gulp.task('sass:watch', () => {
  gulp.watch(global.config.src + '/**/*.scss', ['sass']);
});

gulp.task('sass', () => {
  return gulp.src(global.config.src + '/**/*.scss')
    .pipe(sass())
    .pipe(rename({
      dirname: "css"
    }))
    .pipe(gulp.dest(global.config.dest));
});
