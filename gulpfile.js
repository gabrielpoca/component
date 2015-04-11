var basePaths = {
  src: 'src/',
  dest: 'dist/',
  tmp: '.tmp/',
  styleguide: 'styleguide/'
};

var distFiles = {
  images: basePaths.dest + 'img',
  styles: basePaths.dest,
  scripts: basePaths.dest
};

var appFiles = {
  scripts: basePaths.src + '**/*.js',
  styles: basePaths.src + '**/*.scss',
  images: basePaths.src + '**/*.{png,jpg,svg}',
  templates: basePaths.src + '**/*.html'
};

var tmpFiles = {
  scripts: basePaths.tmp + '**/*.js',
  styles: basePaths.tmp + '*.css',
  images: basePaths.tmp + 'img/**.{png,jpg,svg}',
  templates: basePaths.tmp + '**/*.html'
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

gulp.task(
  'images', 
  require('./gulp/images')(gulp, $, appFiles.images, basePaths.tmp)
);

gulp.task(
  'scripts',
  require('./gulp/scripts')(gulp, $, appFiles.scripts, basePaths.tmp)
);

gulp.task(
  'styles',
  require('./gulp/styles')(gulp, $, appFiles.styles, basePaths.tmp)
);

gulp.task('watch', function() {
  gulp.watch([appFiles.templates], ['html']);
  gulp.watch([appFiles.scripts], ['scripts']);
  gulp.watch([appFiles.styles], ['styles']);
});

gulp.task('connect', function() {
  $.connect.server({
    root: [basePaths.tmp, basePaths.styleguide, 'lib'],
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

gulp.task('default', ['styles', 'images', 'scripts', 'html', 'connect', 'watch']);
