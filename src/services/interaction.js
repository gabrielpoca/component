angular
  .module('component')
  .service('Interaction', Interaction);

function Interaction($window) {
  var _scrolling = false,
    _moving = false;

  var scrollTimeout;

  $window.document.addEventListener('scroll', function() {
    if (!_moving) {
      $window.clearTimeout(scrollTimeout);
      _scrolling = true;
      scrollTimeout = setTimeout(() => _scrolling = false, 250);
    }
  });

  function moving(value) {
    if (value)
      _moving = value;
    else
      return _moving;
  }

  function scrolling(value) {
    if (value)
      _scrolling = value;
    else
      return _scrolling;
  }

  return {
    moving: moving,
    scrolling: scrolling
  };
}
