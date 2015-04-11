var basePaths = {
  src: 'src/',
  dest: 'dist/',
  tmp: '.tmp/'
};

var distFolders = {
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

var excludeFiles =  'styleguide/**.js';

var gulp = require('gulp');
var eventStream = require('event-stream');
var handleError = function (err) {
  console.log(err.toString());
  this.emit('end');
};

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

gulp.task('images', function() {
  return gulp.src(appFiles.images)
    .pipe(gulp.dest(basePaths.tmp))
    .pipe($.connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src(appFiles.scripts)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .on('error', handleError)
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
    .on('error', handleError)
    .pipe($.sourcemaps.write())
    .pipe($.concat('styles.css'))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
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

gulp.task('dist', ['styles', 'scripts', 'images', 'html'], function() {
  var jsSources, jsExcluding, components, templates;

  gulp.src(tmpFiles.styles)
    .pipe($.concat('component.css'))
    .pipe(gulp.dest(distFolders.styles));

  gulp.src(tmpFiles.images)
    .pipe(gulp.dest(distFolders.images));

  jsSources = tmpFiles.scripts;
  jsExcluding = '!' + basePaths.tmp + excludeFiles;

  components = gulp.src([jsSources, jsExcluding]);

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
    .pipe(gulp.dest(distFolders.scripts));
});

gulp.task('default', ['styles', 'images', 'scripts', 'html', 'connect', 'watch']);
