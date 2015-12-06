const gulp        = require('gulp');
const mustache    = require("gulp-mustache");
const del         = require('del');
const runSequence = require('run-sequence');
const rename      = require("gulp-rename");

gulp.task('mustache:watch', () => {
  gulp.watch(global.config.src + '/**/*.mustache', ['mustache']);
  gulp.watch(global.config.src + '/mustache.json', ['mustache']);
});

gulp.task('mustache', () => {
  return gulp.src(global.config.src + '/**/*.mustache')
    .pipe(mustache(global.config.src + '/mustache.json', {extension: ".html"}))
    .pipe(rename((path) => {
      path.dirname = path.dirname.replace(/^(?:html|mustache|templates?)/i, '');
    }))
    .pipe(gulp.dest(global.config.dest));
});
