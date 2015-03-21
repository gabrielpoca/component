angular
  .module('component', [])
  .directive('cButton', Button);

function Button($window) {
  return {
    restrict: 'EA',
    templateUrl: 'directives/button.html'
  };
}
