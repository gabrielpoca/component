(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html ng-app="component"><head><link rel="stylesheet" type="text/css" href="styles.css"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600,700" rel="stylesheet" type="text/css"></head><body><ti-header-layout><div ng-controller="TripsCtrl as ctrl"><ti-trips-list list="ctrl.trips"></ti-trips-list></div></ti-header-layout><script src="angular/angular.min.js"></script><script src="components/core.js"></script><script src="services/interaction.js"></script><script src="services/prefix.js"></script><script src="styleguide/trips.js"></script><script src="components/header/header.js"></script><script src="components/header_layout/header_layout.js"></script><script src="components/list_item/list_item.js"></script><script src="components/trips_list/trips_list.js"></script></body></html>');
}]);
})();

(function(){
"use strict";

angular.module("component", []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9jb3JlLmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnY29tcG9uZW50JywgW10pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
})();
(function(){
"use strict";

angular.module("component").service("Interaction", Interaction);

function Interaction($window) {
  var _scrolling = false,
      _moving = false;

  var scrollTimeout;

  $window.document.addEventListener("scroll", function () {
    if (!_moving) {
      $window.clearTimeout(scrollTimeout);
      _scrolling = true;
      scrollTimeout = setTimeout(function () {
        return _scrolling = false;
      }, 250);
    }
  });

  function moving(value) {
    if (value) _moving = value;else {
      return _moving;
    }
  }

  function scrolling(value) {
    if (value) _scrolling = value;else {
      return _scrolling;
    }
  }

  return {
    moving: moving,
    scrolling: scrolling
  };
}
Interaction.$inject = ["$window"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvaW50ZXJhY3Rpb24uanMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ludGVyYWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDbkIsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFdkMsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0FBQzVCLE1BQUksVUFBVSxHQUFHLEtBQUs7TUFDcEIsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFbEIsTUFBSSxhQUFhLENBQUM7O0FBRWxCLFNBQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7QUFDckQsUUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLGFBQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsbUJBQWEsR0FBRyxVQUFVLENBQUM7ZUFBTSxVQUFVLEdBQUcsS0FBSztPQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDM0Q7R0FDRixDQUFDLENBQUM7O0FBRUgsV0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ3JCLFFBQUksS0FBSyxFQUNQLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFFaEIsYUFBTyxPQUFPLENBQUM7S0FBQTtHQUNsQjs7QUFFRCxXQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDeEIsUUFBSSxLQUFLLEVBQ1AsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUVuQixhQUFPLFVBQVUsQ0FBQztLQUFBO0dBQ3JCOztBQUVELFNBQU87QUFDTCxVQUFNLEVBQUUsTUFBTTtBQUNkLGFBQVMsRUFBRSxTQUFTO0dBQ3JCLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnY29tcG9uZW50JylcbiAgLnNlcnZpY2UoJ0ludGVyYWN0aW9uJywgSW50ZXJhY3Rpb24pO1xuXG5mdW5jdGlvbiBJbnRlcmFjdGlvbigkd2luZG93KSB7XG4gIHZhciBfc2Nyb2xsaW5nID0gZmFsc2UsXG4gICAgX21vdmluZyA9IGZhbHNlO1xuXG4gIHZhciBzY3JvbGxUaW1lb3V0O1xuXG4gICR3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFfbW92aW5nKSB7XG4gICAgICAkd2luZG93LmNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0KTtcbiAgICAgIF9zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgc2Nyb2xsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gX3Njcm9sbGluZyA9IGZhbHNlLCAyNTApO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gbW92aW5nKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgX21vdmluZyA9IHZhbHVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBfbW92aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsaW5nKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgX3Njcm9sbGluZyA9IHZhbHVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBfc2Nyb2xsaW5nO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3Zpbmc6IG1vdmluZyxcbiAgICBzY3JvbGxpbmc6IHNjcm9sbGluZ1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
})();
(function(){
"use strict";

(function () {
  angular.module("component").factory("Prefix", Prefix);

  function Prefix($window) {
    var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
    var styleDeclaration = $window.document.getElementsByTagName("script")[0].style;
    for (var prop in styleDeclaration) {
      if (regex.test(prop)) {
        return "-" + prop.match(regex)[0].toLowerCase() + "-";
      }
    }
    // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
    // However (prop in style) returns the correct value, so we'll have to test for
    // the precence of a specific property
    if ("WebkitOpacity" in styleDeclaration) {
      return "-webkit-";
    }

    if ("KhtmlOpacity" in styleDeclaration) {
      return "-khtml-";
    }

    return "";
  }
  Prefix.$inject = ["$window"];
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvcHJlZml4LmpzIiwic291cmNlcyI6WyJzZXJ2aWNlcy9wcmVmaXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVc7QUFDVixTQUFPLENBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNuQixPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUU3QixXQUFTLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDdkIsUUFBSSxLQUFLLEdBQUcsbUNBQW1DLENBQUM7QUFDaEQsUUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNoRixTQUFLLElBQUksSUFBSSxJQUFJLGdCQUFnQixFQUFFO0FBQ2pDLFVBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNwQixlQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQztPQUN2RDtLQUNGOzs7O0FBSUQsUUFBSSxlQUFlLElBQUksZ0JBQWdCLEVBQUU7QUFDdkMsYUFBTyxVQUFVLENBQUM7S0FDbkI7O0FBRUQsUUFBSSxjQUFjLElBQUksZ0JBQWdCLEVBQUU7QUFDdEMsYUFBTyxTQUFTLENBQUM7S0FDbEI7O0FBRUQsV0FBTyxFQUFFLENBQUM7R0FDWDtDQUNGLENBQUEsRUFBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50JylcbiAgICAuZmFjdG9yeSgnUHJlZml4JywgUHJlZml4KTtcblxuICBmdW5jdGlvbiBQcmVmaXgoJHdpbmRvdykge1xuICAgIHZhciByZWdleCA9IC9eKFdlYmtpdHxLaHRtbHxNb3p8bXN8TykoPz1bQS1aXSkvO1xuICAgIHZhciBzdHlsZURlY2xhcmF0aW9uID0gJHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0uc3R5bGU7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZURlY2xhcmF0aW9uKSB7XG4gICAgICBpZiAocmVnZXgudGVzdChwcm9wKSkge1xuICAgICAgICByZXR1cm4gJy0nICsgcHJvcC5tYXRjaChyZWdleClbMF0udG9Mb3dlckNhc2UoKSArICctJztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgICAvLyBIb3dldmVyIChwcm9wIGluIHN0eWxlKSByZXR1cm5zIHRoZSBjb3JyZWN0IHZhbHVlLCBzbyB3ZSdsbCBoYXZlIHRvIHRlc3QgZm9yXG4gICAgLy8gdGhlIHByZWNlbmNlIG9mIGEgc3BlY2lmaWMgcHJvcGVydHlcbiAgICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHtcbiAgICAgIHJldHVybiAnLXdlYmtpdC0nO1xuICAgIH1cblxuICAgIGlmICgnS2h0bWxPcGFjaXR5JyBpbiBzdHlsZURlY2xhcmF0aW9uKSB7XG4gICAgICByZXR1cm4gJy1raHRtbC0nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
})();
(function(){
"use strict";

angular.module("component").directive("tiHeader", Header).controller("HeaderCtrl", HeaderCtrl);

function Header() {
  return {
    restrict: "E",
    transclude: true,
    templateUrl: "components/header/header.html",
    controller: "HeaderCtrl as ctrl",
    bindToController: true
  };
}

function HeaderCtrl() {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNuQixTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUM3QixVQUFVLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUV4QyxTQUFTLE1BQU0sR0FBRztBQUNoQixTQUFPO0FBQ0wsWUFBUSxFQUFFLEdBQUc7QUFDYixjQUFVLEVBQUUsSUFBSTtBQUNoQixlQUFXLEVBQUUsK0JBQStCO0FBQzVDLGNBQVUsRUFBRSxvQkFBb0I7QUFDaEMsb0JBQWdCLEVBQUUsSUFBSTtHQUN2QixDQUFDO0NBQ0g7O0FBRUQsU0FBUyxVQUFVLEdBQUcsRUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2NvbXBvbmVudCcpXG4gIC5kaXJlY3RpdmUoJ3RpSGVhZGVyJywgSGVhZGVyKVxuICAuY29udHJvbGxlcignSGVhZGVyQ3RybCcsIEhlYWRlckN0cmwpO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDdHJsIGFzIGN0cmwnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gSGVhZGVyQ3RybCgpIHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
})();
(function(){
"use strict";

angular.module("component").directive("tiHeaderLayout", HeaderLayout).controller("HeaderLayoutCtrl", HeaderLayoutCtrl);

function HeaderLayout() {
  return {
    restrict: "E",
    transclude: true,
    templateUrl: "components/header_layout/header_layout.html",
    controller: "HeaderLayoutCtrl as ctrl",
    bindToController: true
  };
}

function HeaderLayoutCtrl() {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXJfbGF5b3V0L2hlYWRlcl9sYXlvdXQuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyX2xheW91dC9oZWFkZXJfbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDbkIsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUN6QyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFcEQsU0FBUyxZQUFZLEdBQUc7QUFDdEIsU0FBTztBQUNMLFlBQVEsRUFBRSxHQUFHO0FBQ2IsY0FBVSxFQUFFLElBQUk7QUFDaEIsZUFBVyxFQUFFLDZDQUE2QztBQUMxRCxjQUFVLEVBQUUsMEJBQTBCO0FBQ3RDLG9CQUFnQixFQUFFLElBQUk7R0FDdkIsQ0FBQztDQUNIOztBQUVELFNBQVMsZ0JBQWdCLEdBQUcsRUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2NvbXBvbmVudCcpXG4gIC5kaXJlY3RpdmUoJ3RpSGVhZGVyTGF5b3V0JywgSGVhZGVyTGF5b3V0KVxuICAuY29udHJvbGxlcignSGVhZGVyTGF5b3V0Q3RybCcsIEhlYWRlckxheW91dEN0cmwpO1xuXG5mdW5jdGlvbiBIZWFkZXJMYXlvdXQoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9oZWFkZXJfbGF5b3V0L2hlYWRlcl9sYXlvdXQuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0hlYWRlckxheW91dEN0cmwgYXMgY3RybCcsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBIZWFkZXJMYXlvdXRDdHJsKCkge1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
})();
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/header/header.html',
    '<header class="Header"><h1>Header Two</h1></header>');
}]);
})();

(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/header_layout/header_layout.html',
    '<div class="HeaderLayout"><div class="HeaderLayout-header"><ti-header></ti-header></div><div class="HeaderLayout-content"><ng-transclude></ng-transclude></div></div>');
}]);
})();

(function(){
"use strict";

angular.module("component").directive("tiTripsList", List).controller("TripsListCtrl", TripsListCtrl);

function List() {
  return {
    restrict: "E",
    templateUrl: "components/trips_list/trips_list.html",
    controller: "TripsListCtrl as ctrl",
    bindToController: true,
    scope: {
      list: "="
    }
  };
}

function TripsListCtrl() {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy90cmlwc19saXN0L3RyaXBzX2xpc3QuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJpcHNfbGlzdC90cmlwc19saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDbkIsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FDOUIsVUFBVSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7QUFFOUMsU0FBUyxJQUFJLEdBQUc7QUFDZCxTQUFPO0FBQ0wsWUFBUSxFQUFFLEdBQUc7QUFDYixlQUFXLEVBQUUsdUNBQXVDO0FBQ3BELGNBQVUsRUFBRSx1QkFBdUI7QUFDbkMsb0JBQWdCLEVBQUUsSUFBSTtBQUN0QixTQUFLLEVBQUU7QUFDTCxVQUFJLEVBQUUsR0FBRztLQUNWO0dBQ0YsQ0FBQztDQUNIOztBQUVELFNBQVMsYUFBYSxHQUFHLEVBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdjb21wb25lbnQnKVxuICAuZGlyZWN0aXZlKCd0aVRyaXBzTGlzdCcsIExpc3QpXG4gIC5jb250cm9sbGVyKCdUcmlwc0xpc3RDdHJsJywgVHJpcHNMaXN0Q3RybCk7XG5cbmZ1bmN0aW9uIExpc3QoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvdHJpcHNfbGlzdC90cmlwc19saXN0Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdUcmlwc0xpc3RDdHJsIGFzIGN0cmwnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGxpc3Q6ICc9J1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gVHJpcHNMaXN0Q3RybCgpIHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
})();
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/trips_list/trips_list.html',
    '<ul class="TripsList"><li ng-repeat="item in ctrl.list" class="TripsList-item"><ti-list-item img="{{ item.img }}" description="{{ item.description }}"></ti-list-item></li></ul>');
}]);
})();

(function(){
"use strict";

angular.module("component").directive("tiListItem", ListItem).controller("ListItemCtrl", ListItemCtrl);

function ListItem() {
  return {
    restrict: "E",
    templateUrl: "components/list_item/list_item.html",
    controller: "ListItemCtrl as ctrl",
    bindToController: true,
    scope: {
      img: "@",
      description: "@"
    }
  };
}

function ListItemCtrl(Interaction, Prefix, $element, $attrs) {
  var ctrl = this;

  var dif,
      offset,
      el = $element.children().children()[1],
      closedOffset = 0,
      openedOffset = -100,
      isOpen = false;

  $element.bind("touchstart", function (e) {
    offset = e.touches[0].pageX;
  });

  $element.bind("touchmove", function (e) {
    if (Interaction.scrolling()) return;

    dif = e.touches[0].clientX - offset;

    if (isOpen) moveWhenOpen(dif);else if (dif < 0) moveWhenClosed(dif);

    Interaction.moving(true);
  });

  $element.bind("touchend", function () {
    if (dif > openedOffset / 3) makeClosed();else makeOpen();

    Interaction.moving(false);
  });

  function moveWhenOpen(dif) {
    move(openedOffset + dif);
  }

  function moveWhenClosed(dif) {
    move(dif);
  }

  function move(dif) {
    var transition = arguments[1] === undefined ? 0 : arguments[1];

    dif = restrainMove(dif);

    el.style[Prefix + "transition"] = "linear " + transition + "s all";
    el.style.transition = "linear " + transition + "s all";
    el.style[Prefix + "transform"] = "translate3d(" + dif + "px, 0, 0)";
    el.style.transform = "translate3d(" + dif + "px, 0, 0)";
  }

  function restrainMove(dif) {
    if (dif < openedOffset) {
      return (dif - openedOffset) / 3 + openedOffset;
    } else if (dif > 0) {
      return 0;
    } else {
      return dif;
    }
  }

  function makeOpen() {
    isOpen = true;
    move(openedOffset, 0.2);
  }

  function makeClosed() {
    isOpen = false;
    move(closedOffset, 0.2);
  }
}
ListItemCtrl.$inject = ["Interaction", "Prefix", "$element", "$attrs"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9saXN0X2l0ZW0vbGlzdF9pdGVtLmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xpc3RfaXRlbS9saXN0X2l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNuQixTQUFTLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUNqQyxVQUFVLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDOztBQUU1QyxTQUFTLFFBQVEsR0FBRztBQUNsQixTQUFPO0FBQ0wsWUFBUSxFQUFFLEdBQUc7QUFDYixlQUFXLEVBQUUscUNBQXFDO0FBQ2xELGNBQVUsRUFBRSxzQkFBc0I7QUFDbEMsb0JBQWdCLEVBQUUsSUFBSTtBQUN0QixTQUFLLEVBQUU7QUFDTCxTQUFHLEVBQUUsR0FBRztBQUNSLGlCQUFXLEVBQUUsR0FBRztLQUNqQjtHQUNGLENBQUM7Q0FDSDs7QUFFRCxTQUFTLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDM0QsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixNQUFJLEdBQUc7TUFDSCxNQUFNO01BQ04sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDdEMsWUFBWSxHQUFHLENBQUM7TUFDaEIsWUFBWSxHQUFHLENBQUMsR0FBRztNQUNuQixNQUFNLEdBQUcsS0FBSyxDQUFDOztBQUVuQixVQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFTLENBQUMsRUFBRTtBQUN0QyxVQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7R0FDN0IsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ3JDLFFBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU87O0FBRXBDLE9BQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7O0FBRXBDLFFBQUksTUFBTSxFQUNSLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUNmLElBQUksR0FBRyxHQUFHLENBQUMsRUFDZCxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRCLGVBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDMUIsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVc7QUFDbkMsUUFBSSxHQUFHLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFDeEIsVUFBVSxFQUFFLENBQUMsS0FFYixRQUFRLEVBQUUsQ0FBQzs7QUFFYixlQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzNCLENBQUMsQ0FBQzs7QUFFSCxXQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUU7QUFDekIsUUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQztHQUMxQjs7QUFFRCxXQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUU7QUFDM0IsUUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ1g7O0FBRUQsV0FBUyxJQUFJLENBQUMsR0FBRyxFQUFrQjtRQUFoQixVQUFVLGdDQUFHLENBQUM7O0FBQy9CLE9BQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXhCLE1BQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxlQUFhLFVBQVUsVUFBTyxDQUFDO0FBQzlELE1BQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxlQUFhLFVBQVUsVUFBTyxDQUFDO0FBQ2xELE1BQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxvQkFBa0IsR0FBRyxjQUFXLENBQUM7QUFDL0QsTUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLG9CQUFrQixHQUFHLGNBQVcsQ0FBQztHQUNwRDs7QUFFRCxXQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUU7QUFDekIsUUFBSSxHQUFHLEdBQUcsWUFBWSxFQUFFO0FBQ3RCLGFBQU8sQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFBLEdBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQztLQUNoRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtBQUNsQixhQUFPLENBQUMsQ0FBQztLQUNWLE1BQU07QUFDTCxhQUFPLEdBQUcsQ0FBQztLQUNaO0dBQ0Y7O0FBRUQsV0FBUyxRQUFRLEdBQUc7QUFDbEIsVUFBTSxHQUFHLElBQUksQ0FBQztBQUNkLFFBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDekI7O0FBRUQsV0FBUyxVQUFVLEdBQUc7QUFDcEIsVUFBTSxHQUFHLEtBQUssQ0FBQztBQUNmLFFBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDekI7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnY29tcG9uZW50JylcbiAgLmRpcmVjdGl2ZSgndGlMaXN0SXRlbScsIExpc3RJdGVtKVxuICAuY29udHJvbGxlcignTGlzdEl0ZW1DdHJsJywgTGlzdEl0ZW1DdHJsKTtcblxuZnVuY3Rpb24gTGlzdEl0ZW0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvbGlzdF9pdGVtL2xpc3RfaXRlbS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnTGlzdEl0ZW1DdHJsIGFzIGN0cmwnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGltZzogJ0AnLFxuICAgICAgZGVzY3JpcHRpb246ICdAJ1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gTGlzdEl0ZW1DdHJsKEludGVyYWN0aW9uLCBQcmVmaXgsICRlbGVtZW50LCAkYXR0cnMpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIHZhciBkaWYsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbCA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKVsxXSxcbiAgICAgIGNsb3NlZE9mZnNldCA9IDAsXG4gICAgICBvcGVuZWRPZmZzZXQgPSAtMTAwLFxuICAgICAgaXNPcGVuID0gZmFsc2U7XG5cbiAgJGVsZW1lbnQuYmluZCgndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBvZmZzZXQgPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gIH0pO1xuXG4gICRlbGVtZW50LmJpbmQoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoSW50ZXJhY3Rpb24uc2Nyb2xsaW5nKCkpIHJldHVybjtcblxuICAgIGRpZiA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gb2Zmc2V0O1xuXG4gICAgaWYgKGlzT3BlbilcbiAgICAgIG1vdmVXaGVuT3BlbihkaWYpO1xuICAgIGVsc2UgaWYgKGRpZiA8IDApXG4gICAgICBtb3ZlV2hlbkNsb3NlZChkaWYpO1xuXG4gICAgSW50ZXJhY3Rpb24ubW92aW5nKHRydWUpO1xuICB9KTtcblxuICAkZWxlbWVudC5iaW5kKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChkaWYgPiBvcGVuZWRPZmZzZXQgLyAzKVxuICAgICAgbWFrZUNsb3NlZCgpO1xuICAgIGVsc2VcbiAgICAgIG1ha2VPcGVuKCk7XG5cbiAgICBJbnRlcmFjdGlvbi5tb3ZpbmcoZmFsc2UpO1xuICB9KTtcblxuICBmdW5jdGlvbiBtb3ZlV2hlbk9wZW4oZGlmKSB7XG4gICAgbW92ZShvcGVuZWRPZmZzZXQgKyBkaWYpOyBcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVXaGVuQ2xvc2VkKGRpZikge1xuICAgIG1vdmUoZGlmKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZGlmLCB0cmFuc2l0aW9uID0gMCkge1xuICAgIGRpZiA9IHJlc3RyYWluTW92ZShkaWYpO1xuXG4gICAgZWwuc3R5bGVbUHJlZml4ICsgJ3RyYW5zaXRpb24nXSA9IGBsaW5lYXIgJHt0cmFuc2l0aW9ufXMgYWxsYDtcbiAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gYGxpbmVhciAke3RyYW5zaXRpb259cyBhbGxgO1xuICAgIGVsLnN0eWxlW1ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IGB0cmFuc2xhdGUzZCgke2RpZn1weCwgMCwgMClgO1xuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2RpZn1weCwgMCwgMClgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdHJhaW5Nb3ZlKGRpZikge1xuICAgIGlmIChkaWYgPCBvcGVuZWRPZmZzZXQpIHtcbiAgICAgIHJldHVybiAoZGlmIC0gb3BlbmVkT2Zmc2V0KSAvIDMgKyBvcGVuZWRPZmZzZXQ7XG4gICAgfSBlbHNlIGlmIChkaWYgPiAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRpZjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlT3BlbigpIHtcbiAgICBpc09wZW4gPSB0cnVlO1xuICAgIG1vdmUob3BlbmVkT2Zmc2V0LCAwLjIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUNsb3NlZCgpIHtcbiAgICBpc09wZW4gPSBmYWxzZTtcbiAgICBtb3ZlKGNsb3NlZE9mZnNldCwgMC4yKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
})();
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/list_item/list_item.html',
    '<div class="ListItem"><div class="ListItem-optionsLayer"><div class="ListItem-option">Remove</div></div><div class="ListItem-baseLayer"><img class="ListItem-image" ng-src="{{ ctrl.img }}"><div class="ListItem-details"><div class="ListItem-description">{{ ctrl.description }}</div><div>€ 3.00</div></div></div></div>');
}]);
})();
