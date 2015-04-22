var paths = require('./paths');

var scripts = paths.styleguideFiles.scripts;
var styles = paths.styleguideFiles.styles;
var index = paths.styleguideFiles.index;
var dest = paths.base.tmpStyleguide;
var styleguideData = paths.appFiles.data;
var styleguideTemplates = paths.appFiles.styleguideTemplates;

var transformTemplate = function(filePath, file) {
  return file.contents.toString('utf8');
};

var transformData = function(filePath, file) {
  var segments = (filePath + '').split('/');
  var fileName =  segments[segments.length - 1].split('.')[0];
  return '<div ng-init=\'' + fileName + '=' + file.contents.toString('utf8') + '\'></div>';
};

module.exports = function(gulp, $) {
  var styleguideScritps = require('./scripts')(gulp, $, scripts, dest);
  var styleguideStyles = require('./styles')(gulp, $, styles, dest, 'styleguide.styles.css');

  var styleguideTask = function() {
    var sources = gulp.src(paths.appFiles.scripts, {read: false});

    styleguideStyles();

    var scriptsStream = styleguideScritps();

    gulp.src(index)
      .pipe($.inject(sources, {
        ignorePath: paths.base.src,
        relative: false
      }))
      .pipe($.inject(scriptsStream, {
        ignorePath: paths.base.tmpStyleguide,
        relative: false,
        name: 'styleguide'
      }))
      .pipe($.inject(gulp.src(styleguideTemplates), {
        starttag: '<!-- inject:styleguideTemplates:html -->',
        transform: transformTemplate
      }))
      .pipe($.inject(gulp.src(styleguideData), {
        starttag: '<!-- inject:styleguideData:html -->',
        transform: transformData
      }))
      .pipe(gulp.dest(paths.base.tmpStyleguide))
      .pipe($.connect.reload());
  };

  return styleguideTask;
};
