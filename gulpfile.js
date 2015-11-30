const gulp        = require('gulp');
const runSequence = require('run-sequence');

//handlebars?

require('require-dir')('gulp.d');

global.config = {
  env: 'prod',
  src: 'src',
  dest: 'build'
};

gulp.task('default', (cb) => {
  runSequence(
    cb
  );
});
