var paths = require('./paths');

var scripts = paths.styleguideFiles.scripts;
var index = paths.styleguideFiles.index;
var dest = paths.base.tmpStyleguide;

module.exports = function(gulp, $) {
  var styleguideScritps = require('./scripts')(gulp, $, scripts, dest);

  var styleguideTask = function() {
    var sources = gulp.src(paths.appFiles.scripts, {read: false});
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
      .pipe(gulp.dest(paths.base.tmpStyleguide))
      .pipe($.connect.reload());
  };

  return styleguideTask;
};
