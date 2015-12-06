const gulp       = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename     = require('gulp-rename');
const path       = require('path');
const data       = require('gulp-data');

gulp.task('mustache:watch', () => {
  gulp.watch(global.config.src + '/**/*.hbs', ['handlebars']);
  gulp.watch(global.config.src + '/**/*.json', ['handlebars']);
});

gulp.task('handlebars', () => {
    return gulp.src(global.config.src + '/**/*.hbs')
        .pipe(data(file => {
            return require(file.path + '.json');
        }))
        .pipe(handlebars())
        .pipe(rename(path => {
            path.dirname = path.dirname.replace(/^(?:html|handelbars?|hbs|templates?)/i, '');
            path.extname = '.html';
        }))
        .pipe(gulp.dest(global.config.dest));
});
