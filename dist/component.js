(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html ng-app="component"><head><link rel="stylesheet" type="text/css" href="styles.css"></head><body><h1>Testing</h1><c-button></c-button><script src="angular/angular.min.js"></script><script src="directives/button.js"></script></body></html>');
}]);
})();

(function(){
"use strict";

angular.module("component", []).directive("cButton", Button);

function Button($window) {
  return {
    restrict: "EA",
    templateUrl: "directives/button.html"
  };
}
Button.$inject = ["$window"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy9idXR0b24uanMiLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQ3ZCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRWhDLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUN2QixTQUFPO0FBQ0wsWUFBUSxFQUFFLElBQUk7QUFDZCxlQUFXLEVBQUUsd0JBQXdCO0dBQ3RDLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnY29tcG9uZW50JywgW10pXG4gIC5kaXJlY3RpdmUoJ2NCdXR0b24nLCBCdXR0b24pO1xuXG5mdW5jdGlvbiBCdXR0b24oJHdpbmRvdykge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlyZWN0aXZlcy9idXR0b24uaHRtbCdcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
})();
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('directives/button.html',
    '<button class="Button">Random</button>');
}]);
})();
