var gulp        = require('gulp');
var sass        = require('gulp-sass');
var swig        = require('gulp-swig');
var data        = require('gulp-data');
var path        = require('path');
var browserSync = require('browser-sync');

var src = {
	scss: './app/scss/*.scss',
	html: './app/html/*.html',
	json: './app/json/'
};

var getJsonData = function(file) {
	return require(src.json + path.basename(file.path) + '.json');
};

gulp.task('serve', function() {
	browserSync({
		server: "./build"
	});

	gulp.watch(src.scss, ['sass']);
	gulp.watch([src.html, src.json + '*.json'], ['templates']);
});

gulp.task('templates', function() {
	return gulp.src(src.html)
		.pipe(data(getJsonData))
		.pipe(swig())
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
