angular
  .module('component')
  .directive('tiInputText', InputText)
  .controller('InputTextCtrl', InputTextCtrl);

function InputText() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'components/input_text/input_text.html',
    controller: 'InputTextCtrl as ctrl',
    bindToController: true,
    scope: {
      input: '='
    }
  };
}

function InputTextCtrl() {
}
