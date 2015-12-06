const gulp        = require('gulp');
const runSequence = require('run-sequence');

// Watch any task that ends with :watch
gulp.task('watch', () => {
  const tasks = Object.keys(gulp.tasks);
  runSequence(tasks.filter(x => x.endsWith(":watch")));
});
