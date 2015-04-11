var handleError = require('./handle_error.js');

module.exports = function(gulp, $, src, dest) {
  return function() {
    return gulp.src(src)
      .pipe($.sourcemaps.init())
      .pipe($.babel())
      .on('error', handleError)
      .pipe($.sourcemaps.write())
      .pipe($.ngAnnotate())
      .pipe($.wrap('(function(){\n<%= contents %>\n})();'))
      .pipe(gulp.dest(dest))
      .pipe($.connect.reload());
  };
};
