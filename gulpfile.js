var paths = {
  src: 'src/',
  dest: 'dist/',
  tmp: '.tmp/',
  tmpStyleguide: '.tmp.styleguide/',
  styleguide: 'styleguide/'
};

var distFiles = {
  images: paths.dest + 'img',
  styles: paths.dest,
  scripts: paths.dest
};

var appFiles = {
  scripts: paths.src + '**/*.js',
  styles: paths.src + '**/*.scss',
  images: paths.src + '**/*.{png,jpg,svg}',
  templates: paths.src + '**/*.html'
};

var styleguideFiles = {
  scripts: paths.styleguide + '**/*.js',
  templates: paths.styleguide + '**/*.html',
  index: paths.styleguide + 'index.html'
};

var tmpFiles = {
  scripts: paths.tmp + '**/*.js',
  styles: paths.tmp + '*.css',
  images: paths.tmp + 'img/**.{png,jpg,svg}',
  templates: paths.tmp + '**/*.html'
};

var gulp = require('gulp');
var eventStream = require('event-stream');

var $ = require('gulp-load-plugins')({
  camelize: true
});

gulp.task(
  'images', 
  require('./gulp/images')(gulp, $, appFiles.images, paths.tmp)
);

gulp.task(
  'scripts',
  require('./gulp/scripts')(gulp, $, appFiles.scripts, paths.tmp)
);

gulp.task(
  'styles',
  require('./gulp/styles')(gulp, $, appFiles.styles, paths.tmp)
);

gulp.task(
  'html',
  require('./gulp/html')(gulp, $, appFiles.templates, paths.tmp)
);

gulp.task(
  'styleguide',
  require('./gulp/styleguide')(gulp, $, appFiles.scripts, paths.styleguide, paths.tmpStyleguide)
);

gulp.task('watch', function() {
  gulp.watch([appFiles.templates], ['html']);
  gulp.watch([appFiles.scripts], ['scripts']);
  gulp.watch([appFiles.styles], ['styles']);

  gulp.watch([
    styleguideFiles.scripts,
    styleguideFiles.templates,
    styleguideFiles.index
  ], ['styleguide']);
});

gulp.task('connect', function() {
  $.connect.server({
    root: [paths.tmp, paths.tmpStyleguide, 'lib'],
    livereload: true
  });
});

gulp.task('dist', ['styles', 'scripts', 'images', 'html'], function() {
  var components, templates;

  gulp.src(tmpFiles.styles)
    .pipe($.concat('component.css'))
    .pipe(gulp.dest(distFiles.styles));

  gulp.src(tmpFiles.images)
    .pipe(gulp.dest(distFiles.images));

  components = gulp.src(tmpFiles.scripts);

  templates = gulp.src(tmpFiles.templates)
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
    .pipe(gulp.dest(distFiles.scripts));
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
