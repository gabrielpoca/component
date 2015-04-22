angular
  .module('component')
  .directive('tiLayout', Layout)
  .controller('LayoutCtrl', LayoutCtrl);

function Layout() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'components/layout/layout.html',
    controller: 'LayoutCtrl as ctrl',
    bindToController: true
  };
}

function LayoutCtrl() {
}
