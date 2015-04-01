angular
  .module('component')
  .directive('tiHeaderLayout', HeaderLayout)
  .controller('HeaderLayoutCtrl', HeaderLayoutCtrl);

function HeaderLayout() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'components/header_layout/header_layout.html',
    controller: 'HeaderLayoutCtrl as ctrl',
    bindToController: true
  };
}

function HeaderLayoutCtrl() {
}
