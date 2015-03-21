var basePaths = {
  src: 'src/',
  dest: 'dist/',
  tmp: '.tmp/'
};

var appFiles = {
  scripts: basePaths.src + '**/*.js',
  styles: basePaths.src + '**/*.scss',
  templates: basePaths.src + '**/*.html'
};

var gulp = require('gulp');
var eventStream = require('event-stream');

var $ = require('gulp-load-plugins')({
  camelize: true
});

gulp.task('html', function() {
  var sources = gulp.src(appFiles.scripts, {read: false});

  return gulp.src([appFiles.templates].concat(['src/index.html']))
    .pipe($.inject(sources, { relative: true }))
    .pipe(gulp.dest(basePaths.tmp))
    .pipe($.connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src(appFiles.scripts)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe($.ngAnnotate())
    .pipe($.wrap('(function(){\n<%= contents %>\n})();'))
    .pipe(gulp.dest(basePaths.tmp))
    .pipe($.connect.reload());
});

gulp.task('styles', function() {
  return gulp.src(appFiles.styles)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.sourcemaps.write())
    .pipe($.concat('styles.css'))
    .pipe(gulp.dest(basePaths.tmp))
    .pipe($.connect.reload());
});

gulp.task('watch', function() {
  gulp.watch([appFiles.templates], ['html']);
  gulp.watch([appFiles.scripts], ['scripts']);
  gulp.watch([appFiles.styles], ['styles']);
});

gulp.task('connect', function() {
  $.connect.server({
    root: [basePaths.tmp, 'lib'],
    livereload: true
  });
});

gulp.task('dist', ['styles', 'scripts', 'html'], function() {
  gulp.src('.tmp/*.css')
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

gulp.task('default', ['styles', 'scripts', 'html', 'connect', 'watch']);
