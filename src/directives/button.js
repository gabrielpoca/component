angular
  .module('component')
  .directive('cButton', Button);

function Button($window) {
  return {
    restrict: 'A',
    templateUrl: 'directives/button.html'
  };
}
