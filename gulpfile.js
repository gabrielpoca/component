var gulp = require('gulp');
var eventStream = require('event-stream');

var $ = require('gulp-load-plugins')({
  camelize: true
});

gulp.task('html', function() {
  return gulp.src(['src/*.html', 'src/**/*.html'])
    .pipe(gulp.dest('.tmp'));
});

gulp.task('scripts', function() {
  return gulp.src('src/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe($.ngAnnotate())
    .pipe($.wrap('(function(){\n<%= contents %>\n})();'))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('styles', function() {
  return gulp.src('src/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp'));
});

gulp.task('connect', function() {
  $.connect.server({
    root: ['.tmp'],
    livereload: true
  });
});

gulp.task('dist', ['styles', 'scripts', 'html'], function() {
  gulp.src('.tmp/**/*.css')
    .pipe($.concat('component.css'))
    .pipe(gulp.dest('dist'));

  var components = gulp.src('.tmp/**/*.js');
  var templates = gulp.src('.tmp/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'component'
    }));

  return eventStream.merge(components, templates)
    .pipe($.concat('component.js'))
    .pipe(gulp.dest('dist'));
});
