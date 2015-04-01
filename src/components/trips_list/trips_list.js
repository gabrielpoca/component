angular
  .module('component')
  .directive('tiTripsList', List)
  .controller('TripsListCtrl', TripsListCtrl);

function List() {
  return {
    restrict: 'E',
    templateUrl: 'components/trips_list/trips_list.html',
    controller: 'TripsListCtrl as ctrl',
    bindToController: true,
    scope: {
      list: '='
    }
  };
}

function TripsListCtrl() {
}
