var base = {
  src: 'src/',
  dest: 'dist/',
  tmp: '.tmp/',
  tmpStyleguide: '.tmp.styleguide/',
  styleguide: 'styleguide/'
};

module.exports = {
  base: base,

  distFiles: {
    images: base.dest + 'img',
    styles: base.dest,
    scripts: base.dest
  },

  appFiles: {
    scripts: base.src + '**/*.js',
    styles: base.src + '**/*.scss',
    images: base.src + '**/*.{png,jpg,svg}',
    templates: base.src + '**/*.html'
  },

  styleguideFiles: {
    scripts: base.styleguide + '**/*.js',
    templates: base.styleguide + '**/*.html',
    index: base.styleguide + 'index.html'
  },

  tmpFiles: {
    scripts: base.tmp + '**/*.js',
    styles: base.tmp + '*.css',
    images: base.tmp + 'img/**.{png,jpg,svg}',
    templates: base.tmp + '**/*.html'
  }
};
