module.exports = function(gulp, $, appScripts, path, dest) {
  var files = {
    scripts: path + '**/*.js',
    templates: path + '**/*.html',
    index: path + 'index.html'
  };

  var scriptsTask = require('./scripts')(gulp, $, files.scripts, dest);
  var watchTask = function() {
    gulp.watch([files.scripts, files.templates], styleguideTask);
  };

  var styleguideTask = function() {
    var sources = gulp.src(appScripts, {read: false});
    var scriptsStream = scriptsTask();

    gulp.src(files.index)
      .pipe($.inject(sources, {
        ignorePath: 'src',
        relative: false
      }))
      .pipe($.inject(scriptsStream, {
        ignorePath: '.tmp.styleguide',
        relative: false,
        name: 'styleguide'
      }))
      .pipe(gulp.dest(dest))
      .pipe($.connect.reload());

    watchTask();
  };

  return styleguideTask;
};
