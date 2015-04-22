var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  camelize: true
});

module.exports = function(src, dest) {
  return function() {
    return gulp.src(src)
      .pipe(gulp.dest(dest))
      .pipe($.connect.reload());
  };
};
