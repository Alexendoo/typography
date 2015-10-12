var gulp        = require('gulp');
var sass        = require('gulp-sass');
var data        = require('gulp-data');
var jade        = require('gulp-jade');
var path        = require('path');
var browserSync = require('browser-sync');

var src = {
    scss: './app/scss/*.scss',
    html: './app/html/',
    jade: './app/jade/',
    json: './app/json/'
};

gulp.task('serve', function() {
    browserSync({
        server: "./build"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch([src.jade + '**/*.jade', src.json + '*.json'], ['templates']);
});

gulp.task('templates', function() {
    return gulp.src(src.jade + '*.jade')
        .pipe(data(function(file) {
            return require(src.json + path.basename(file.path, '.jade') + '.json');
        }))
        .pipe(jade())
        .pipe(gulp.dest('build'))
        .on("end", browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['serve']);
