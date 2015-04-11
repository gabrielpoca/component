module.exports = function(gulp, $, src, dest) {
  return function() {
    return gulp.src(src)
      .pipe(gulp.dest(dest))
      .pipe($.connect.reload());
  };
};
