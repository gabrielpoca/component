angular
  .module('component', [])
  .directive('cButton', Button)
  .controller('ButtonCtrl', ButtonCtrl);

function Button($window) {
  return {
    restrict: 'EA',
    templateUrl: 'directives/button.html',
    controller: 'ButtonCtrl as ctrl',
    bindToController: true
  };
}

function ButtonCtrl() {
}
