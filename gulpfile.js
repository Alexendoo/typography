const gulp        = require('gulp');
const runSequence = require('run-sequence');

//handlebars?

require('require-dir')('gulp.d');

gulp.task('default', (cb) => {
  runSequence(
    cb
  );
});
