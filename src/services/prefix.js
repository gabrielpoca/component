(function() {
  angular
    .module('component')
    .factory('Prefix', Prefix);

  function Prefix($window) {
    var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
    var styleDeclaration = $window.document.getElementsByTagName('script')[0].style;
    for (var prop in styleDeclaration) {
      if (regex.test(prop)) {
        return '-' + prop.match(regex)[0].toLowerCase() + '-';
      }
    }
    // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
    // However (prop in style) returns the correct value, so we'll have to test for
    // the precence of a specific property
    if ('WebkitOpacity' in styleDeclaration) {
      return '-webkit-';
    }

    if ('KhtmlOpacity' in styleDeclaration) {
      return '-khtml-';
    }

    return '';
  }
})();
