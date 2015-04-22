var paths = require('./gulp/paths');
var appFiles = appFiles;

var gulp = require('gulp');
var eventStream = require('event-stream');

var $ = require('gulp-load-plugins')({
  camelize: true
});

gulp.task('images', require('./gulp/images')(appFiles.images, paths.base.tmp));
gulp.task('scripts', require('./gulp/scripts')(appFiles.scripts, paths.base.tmp));
gulp.task('styles', require('./gulp/styles')(appFiles.styles, paths.base.tmp, 'styles.css'));
gulp.task('html', require('./gulp/html')(appFiles.templates, paths.base.tmp));
gulp.task('styleguide', require('./gulp/styleguide'));

gulp.task('watch', function() {
  gulp.watch([appFiles.templates], ['html']);
  gulp.watch([appFiles.scripts], ['scripts']);
  gulp.watch([appFiles.styles], ['styles']);

  gulp.watch([
    paths.styleguideFiles.scripts,
    paths.styleguideFiles.templates,
    paths.styleguideFiles.index,
    appFiles.styleguideTemplates
  ], ['styleguide']);
});

gulp.task('connect', function() {
  $.connect.server({
    root: [paths.base.tmp, paths.base.tmpStyleguide, 'lib'],
    livereload: true
  });
});

gulp.task('dist', ['styles', 'scripts', 'images', 'html'], function() {
  var components, templates;

  gulp.src(paths.tmpFiles.styles)
    .pipe($.concat('component.css'))
    .pipe(gulp.dest(path.distFiles.styles));

  gulp.src(paths.tmpFiles.images)
    .pipe(gulp.dest(path.distFiles.images));

  components = gulp.src(paths.tmpFiles.scripts);

  templates = gulp.src(paths.tmpFiles.templates)
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
    .pipe(gulp.dest(path.distFiles.scripts));
});

gulp.task('default', [
  'styles',
  'images',
  'scripts',
  'html',
  'styleguide',
  'connect',
  'watch'
]);
