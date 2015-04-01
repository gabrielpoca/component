(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<html ng-app="component"><head><link rel="stylesheet" type="text/css" href="styles.css"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600,700" rel="stylesheet" type="text/css"></head><body><list-item img="https://pbs.twimg.com/profile_images/437683020003561474/Z5_SkyHh.jpeg" description="Paid for gas"></list-item><script src="angular/angular.min.js"></script><script src="components/core.js"></script><script src="services/interaction.js"></script><script src="services/prefix.js"></script><script src="styleguide/random.js"></script><script src="components/list_item/list_item.js"></script></body></html>');
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

angular.module("component").directive("listItem", ListItem).controller("ListItemCtrl", ListItemCtrl);

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

  ctrl.description = $attrs.description;
  ctrl.img = $attrs.img;

  var dif,
      offset,
      el = $element.children().children()[1];
  closedOffset = 0, openedOffset = -120, isOpen = false;

  $element.bind("touchstart", function (e) {
    offset = e.touches[0].pageX;
  });

  $element.bind("touchmove", function (e) {
    if (Interaction.scrolling()) return;

    dif = e.touches[0].clientX - offset;

    if (isOpen) move(dif + openedOffset);else if (dif < 0) move(dif);

    Interaction.moving(true);
  });

  $element.bind("touchend", function () {
    if (dif > openedOffset / 3) makeClosed();else makeOpen();

    Interaction.moving(false);
  });

  function move(dif) {
    var transition = arguments[1] === undefined ? 0 : arguments[1];

    el.style[Prefix + "transition"] = "linear " + transition + "s all";
    el.style[Prefix + "transform"] = "translate3d(" + dif + "px, 0, 0)";
    el.styletransform = "translate3d(" + dif + "px, 0, 0)";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9saXN0X2l0ZW0vbGlzdF9pdGVtLmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xpc3RfaXRlbS9saXN0X2l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNuQixTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUMvQixVQUFVLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDOztBQUU1QyxTQUFTLFFBQVEsR0FBRztBQUNsQixTQUFPO0FBQ0wsWUFBUSxFQUFFLEdBQUc7QUFDYixlQUFXLEVBQUUscUNBQXFDO0FBQ2xELGNBQVUsRUFBRSxzQkFBc0I7QUFDbEMsb0JBQWdCLEVBQUUsSUFBSTtBQUN0QixTQUFLLEVBQUU7QUFDTCxTQUFHLEVBQUUsR0FBRztBQUNSLGlCQUFXLEVBQUUsR0FBRztLQUNqQjtHQUNGLENBQUM7Q0FDSDs7QUFFRCxTQUFTLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7QUFDM0QsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixNQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdEMsTUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDOztBQUV0QixNQUFJLEdBQUc7TUFDSCxNQUFNO01BQ04sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QyxjQUFZLEdBQUcsQ0FBQyxFQUNoQixZQUFZLEdBQUcsQ0FBQyxHQUFHLEVBQ25CLE1BQU0sR0FBRyxLQUFLLENBQUM7O0FBRW5CLFVBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ3RDLFVBQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztHQUM3QixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDckMsUUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTzs7QUFFcEMsT0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7QUFFcEMsUUFBSSxNQUFNLEVBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQyxLQUN0QixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVaLGVBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDMUIsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVc7QUFDbkMsUUFBSSxHQUFHLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFDeEIsVUFBVSxFQUFFLENBQUMsS0FFYixRQUFRLEVBQUUsQ0FBQzs7QUFFYixlQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzNCLENBQUMsQ0FBQzs7QUFFSCxXQUFTLElBQUksQ0FBQyxHQUFHLEVBQWtCO1FBQWhCLFVBQVUsZ0NBQUcsQ0FBQzs7QUFDL0IsTUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLGVBQWEsVUFBVSxVQUFPLENBQUM7QUFDOUQsTUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLG9CQUFrQixHQUFHLGNBQVcsQ0FBQztBQUMvRCxNQUFFLENBQUMsY0FBYyxvQkFBa0IsR0FBRyxjQUFXLENBQUM7R0FDbkQ7O0FBRUQsV0FBUyxRQUFRLEdBQUc7QUFDbEIsVUFBTSxHQUFHLElBQUksQ0FBQztBQUNkLFFBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDekI7O0FBRUQsV0FBUyxVQUFVLEdBQUc7QUFDcEIsVUFBTSxHQUFHLEtBQUssQ0FBQztBQUNmLFFBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDekI7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnY29tcG9uZW50JylcbiAgLmRpcmVjdGl2ZSgnbGlzdEl0ZW0nLCBMaXN0SXRlbSlcbiAgLmNvbnRyb2xsZXIoJ0xpc3RJdGVtQ3RybCcsIExpc3RJdGVtQ3RybCk7XG5cbmZ1bmN0aW9uIExpc3RJdGVtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2xpc3RfaXRlbS9saXN0X2l0ZW0uaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0xpc3RJdGVtQ3RybCBhcyBjdHJsJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIHNjb3BlOiB7XG4gICAgICBpbWc6ICdAJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQCdcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIExpc3RJdGVtQ3RybChJbnRlcmFjdGlvbiwgUHJlZml4LCAkZWxlbWVudCwgJGF0dHJzKSB7XG4gIHZhciBjdHJsID0gdGhpcztcblxuICBjdHJsLmRlc2NyaXB0aW9uID0gJGF0dHJzLmRlc2NyaXB0aW9uO1xuICBjdHJsLmltZyA9ICRhdHRycy5pbWc7XG5cbiAgdmFyIGRpZixcbiAgICAgIG9mZnNldCxcbiAgICAgIGVsID0gJGVsZW1lbnQuY2hpbGRyZW4oKS5jaGlsZHJlbigpWzFdO1xuICAgICAgY2xvc2VkT2Zmc2V0ID0gMCxcbiAgICAgIG9wZW5lZE9mZnNldCA9IC0xMjAsXG4gICAgICBpc09wZW4gPSBmYWxzZTtcblxuICAkZWxlbWVudC5iaW5kKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuICAgIG9mZnNldCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgfSk7XG5cbiAgJGVsZW1lbnQuYmluZCgndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChJbnRlcmFjdGlvbi5zY3JvbGxpbmcoKSkgcmV0dXJuO1xuXG4gICAgZGlmID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBvZmZzZXQ7XG5cbiAgICBpZiAoaXNPcGVuKVxuICAgICAgbW92ZShkaWYgKyBvcGVuZWRPZmZzZXQpO1xuICAgIGVsc2UgaWYgKGRpZiA8IDApXG4gICAgICBtb3ZlKGRpZik7XG5cbiAgICBJbnRlcmFjdGlvbi5tb3ZpbmcodHJ1ZSk7XG4gIH0pO1xuXG4gICRlbGVtZW50LmJpbmQoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGRpZiA+IG9wZW5lZE9mZnNldCAvIDMpXG4gICAgICBtYWtlQ2xvc2VkKCk7XG4gICAgZWxzZVxuICAgICAgbWFrZU9wZW4oKTtcblxuICAgIEludGVyYWN0aW9uLm1vdmluZyhmYWxzZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1vdmUoZGlmLCB0cmFuc2l0aW9uID0gMCkge1xuICAgIGVsLnN0eWxlW1ByZWZpeCArICd0cmFuc2l0aW9uJ10gPSBgbGluZWFyICR7dHJhbnNpdGlvbn1zIGFsbGA7XG4gICAgZWwuc3R5bGVbUHJlZml4ICsgJ3RyYW5zZm9ybSddID0gYHRyYW5zbGF0ZTNkKCR7ZGlmfXB4LCAwLCAwKWA7XG4gICAgZWwuc3R5bGV0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtkaWZ9cHgsIDAsIDApYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VPcGVuKCkge1xuICAgIGlzT3BlbiA9IHRydWU7XG4gICAgbW92ZShvcGVuZWRPZmZzZXQsIDAuMik7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlQ2xvc2VkKCkge1xuICAgIGlzT3BlbiA9IGZhbHNlO1xuICAgIG1vdmUoY2xvc2VkT2Zmc2V0LCAwLjIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
})();
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/list_item/list_item.html',
    '<div class="ListItem"><div class="ListItem-optionsLayer"><div class="ListItem-option">Remove</div></div><div class="ListItem-baseLayer"><img class="ListItem-image" src="{{ ctrl.img }}"><div class="ListItem-details"><div class="ListItem-description">{{ ctrl.description }}</div><div>€ 3.00</div></div></div></div>');
}]);
})();
