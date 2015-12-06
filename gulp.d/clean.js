const gulp = require('gulp');
const del  = require('del');

gulp.task('clean', (cb) => {
  del(global.config.dest + '/*')
    .then(cb());
});
