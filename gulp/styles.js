var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  camelize: true
});

var handleError = require('./handle_error.js');

module.exports = function(src, dest, name) {
  return function() {
    return gulp.src(src)
      .pipe($.sourcemaps.init())
      .pipe($.sass())
      .on('error', handleError)
      .pipe($.sourcemaps.write())
      .pipe($.concat(name))
      .pipe($.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest(dest))
      .pipe($.connect.reload());
  };
};
