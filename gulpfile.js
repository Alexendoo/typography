const gulp        = require('gulp');
const runSequence = require('run-sequence');

require('require-dir')('gulp.d');

global.config = {
  env: 'prod',
  src: 'src',
  dest: 'build'
};

gulp.task('default', cb => {
  runSequence(
    'clean',
    ['sass', 'handlebars'],
    cb
  );
});

gulp.task('dev', () => {
  runSequence(
    'clean',
    ['sass', 'handlebars'],
    ['watch', 'live']
  );
});
