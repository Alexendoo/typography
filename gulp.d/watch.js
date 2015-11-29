const gulp        = require('gulp');
const runSequence = require('run-sequence');

// Watch any task that ends with :watch
gulp.task('watch', () => {
  // Get all of the gulp task names
  const tasks = Object.keys(gulp.tasks);
  runSequence(tasks.find(x => x.endsWith(":watch")));
});
