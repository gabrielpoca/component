angular
  .module('component')
  .directive('tiHeader', Header)
  .controller('HeaderCtrl', HeaderCtrl);

function Header() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'components/header/header.html',
    controller: 'HeaderCtrl as ctrl',
    bindToController: true
  };
}

function HeaderCtrl() {
}
