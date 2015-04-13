(function(){
"use strict";

angular.module("component", []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXMiOlsiY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FDSixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdjb21wb25lbnQnLCBbXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
})();
(function(){
"use strict";

angular.module("component").service("Interaction", Interaction);

function Interaction($window) {
  var _scrolling = false,
      _moving = false;

  var scrollTimeout;

  $window.document.addEventListener("touchmove", function (e) {
    return e.preventDefault();
  }, false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvaW50ZXJhY3Rpb24uanMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ludGVyYWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDbkIsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFdkMsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0FBQzVCLE1BQUksVUFBVSxHQUFHLEtBQUs7TUFDcEIsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFbEIsTUFBSSxhQUFhLENBQUM7O0FBRWxCLFNBQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQztXQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU7R0FBQSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pGLFNBQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7QUFDckQsUUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLGFBQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsbUJBQWEsR0FBRyxVQUFVLENBQUM7ZUFBTSxVQUFVLEdBQUcsS0FBSztPQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDM0Q7R0FDRixDQUFDLENBQUM7O0FBRUgsV0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ3JCLFFBQUksS0FBSyxFQUNQLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFFaEIsYUFBTyxPQUFPLENBQUM7S0FBQTtHQUNsQjs7QUFFRCxXQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDeEIsUUFBSSxLQUFLLEVBQ1AsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUVuQixhQUFPLFVBQVUsQ0FBQztLQUFBO0dBQ3JCOztBQUVELFNBQU87QUFDTCxVQUFNLEVBQUUsTUFBTTtBQUNkLGFBQVMsRUFBRSxTQUFTO0dBQ3JCLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnY29tcG9uZW50JylcbiAgLnNlcnZpY2UoJ0ludGVyYWN0aW9uJywgSW50ZXJhY3Rpb24pO1xuXG5mdW5jdGlvbiBJbnRlcmFjdGlvbigkd2luZG93KSB7XG4gIHZhciBfc2Nyb2xsaW5nID0gZmFsc2UsXG4gICAgX21vdmluZyA9IGZhbHNlO1xuXG4gIHZhciBzY3JvbGxUaW1lb3V0O1xuXG4gICR3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSwgZmFsc2UpO1xuICAkd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghX21vdmluZykge1xuICAgICAgJHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dCk7XG4gICAgICBfc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IF9zY3JvbGxpbmcgPSBmYWxzZSwgMjUwKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1vdmluZyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSlcbiAgICAgIF9tb3ZpbmcgPSB2YWx1ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gX21vdmluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbGluZyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSlcbiAgICAgIF9zY3JvbGxpbmcgPSB2YWx1ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gX3Njcm9sbGluZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW92aW5nOiBtb3ZpbmcsXG4gICAgc2Nyb2xsaW5nOiBzY3JvbGxpbmdcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
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
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/header/header.html',
    '<header class="Header"><div class="Header-icon"><img class="Header-iconImg" src="img/icon-add.png"></div><img class="Header-logo" src="img/text-logo.png"><div class="Header-icon"><img class="Header-iconImg" src="img/icon-add.png"></div></header>');
}]);
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
  $templateCache.put('components/header_layout/header_layout.html',
    '<div class="HeaderLayout"><div class="HeaderLayout-header"><ti-header></ti-header></div><div class="HeaderLayout-content"><ng-transclude></ng-transclude></div></div>');
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
      id: "@",
      img: "@",
      description: "@",
      amount: "@",
      clicked: "&"
    }
  };
}

function ListItemCtrl(Interaction, Prefix, $element, $window) {
  var ctrl = this;

  var dif,
      offset,
      el = $element.children().children()[1],
      closedOffset = 0,
      openedOffset = -100,
      isOpen = false;

  $element.bind("touchstart", function (e) {
    offset = e.touches[0].pageX;
    dif = 0;
  });

  $element.bind("touchmove", function (e) {
    if (Interaction.scrolling()) return;

    dif = e.touches[0].clientX - offset;

    if (isOpen) moveWhenOpen(dif);else if (dif < 0) moveWhenClosed(dif);

    Interaction.moving(true);
  });

  $element.bind("touchend", function () {
    if (!isOpen && $window.Math.abs(dif) < 5) return ctrl.clicked({ id: ctrl.id });

    if (dif > openedOffset / 3) makeClosed();else makeOpen();

    Interaction.moving(false);
  });

  function moveWhenOpen(dif) {
    move(openedOffset + dif);
  }

  function moveWhenClosed(dif) {
    move(dif);
  }

  function move(newDif) {
    var newTransition = arguments[1] === undefined ? 0 : arguments[1];

    var _parseMovement = parseMovement(newDif, newTransition);

    var dif = _parseMovement.dif;
    var transition = _parseMovement.transition;

    el.style[Prefix + "transition"] = "linear " + transition + "s all";
    el.style.transition = "linear " + transition + "s all";
    el.style[Prefix + "transform"] = "translate3d(" + dif + "px, 0, 0)";
    el.style.transform = "translate3d(" + dif + "px, 0, 0)";
  }

  function parseMovement(dif, transition) {
    if (dif < openedOffset) {
      dif = (dif - openedOffset) / 3 + openedOffset;
    } else if (dif > 0) {
      dif = 0;
      transition = 0.2;
    } else {
      dif = dif;
    }

    return {
      dif: dif,
      transition: transition
    };
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
ListItemCtrl.$inject = ["Interaction", "Prefix", "$element", "$window"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9saXN0X2l0ZW0vbGlzdF9pdGVtLmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xpc3RfaXRlbS9saXN0X2l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNuQixTQUFTLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUNqQyxVQUFVLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDOztBQUU1QyxTQUFTLFFBQVEsR0FBRztBQUNsQixTQUFPO0FBQ0wsWUFBUSxFQUFFLEdBQUc7QUFDYixlQUFXLEVBQUUscUNBQXFDO0FBQ2xELGNBQVUsRUFBRSxzQkFBc0I7QUFDbEMsb0JBQWdCLEVBQUUsSUFBSTtBQUN0QixTQUFLLEVBQUU7QUFDTCxRQUFFLEVBQUUsR0FBRztBQUNQLFNBQUcsRUFBRSxHQUFHO0FBQ1IsaUJBQVcsRUFBRSxHQUFHO0FBQ2hCLFlBQU0sRUFBRSxHQUFHO0FBQ1gsYUFBTyxFQUFFLEdBQUc7S0FDYjtHQUNGLENBQUM7Q0FDSDs7QUFFRCxTQUFTLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDNUQsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixNQUFJLEdBQUc7TUFDSCxNQUFNO01BQ04sRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDdEMsWUFBWSxHQUFHLENBQUM7TUFDaEIsWUFBWSxHQUFHLENBQUMsR0FBRztNQUNuQixNQUFNLEdBQUcsS0FBSyxDQUFDOztBQUVuQixVQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFTLENBQUMsRUFBRTtBQUN0QyxVQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDNUIsT0FBRyxHQUFHLENBQUMsQ0FBQztHQUNULENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFTLENBQUMsRUFBRTtBQUNyQyxRQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPOztBQUVwQyxPQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOztBQUVwQyxRQUFJLE1BQU0sRUFDUixZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsS0FDZixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQ2QsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV0QixlQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzFCLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFXO0FBQ25DLFFBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUN0QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7O0FBRXJDLFFBQUksR0FBRyxHQUFHLFlBQVksR0FBRyxDQUFDLEVBQ3hCLFVBQVUsRUFBRSxDQUFDLEtBRWIsUUFBUSxFQUFFLENBQUM7O0FBRWIsZUFBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMzQixDQUFDLENBQUM7O0FBRUgsV0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQ3pCLFFBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUM7R0FDMUI7O0FBRUQsV0FBUyxjQUFjLENBQUMsR0FBRyxFQUFFO0FBQzNCLFFBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNYOztBQUVELFdBQVMsSUFBSSxDQUFDLE1BQU0sRUFBcUI7UUFBbkIsYUFBYSxnQ0FBRyxDQUFDOzt5QkFDWCxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQzs7UUFBeEQsR0FBRyxrQkFBSCxHQUFHO1FBQUUsVUFBVSxrQkFBVixVQUFVOztBQUNyQixNQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsZUFBYSxVQUFVLFVBQU8sQ0FBQztBQUM5RCxNQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsZUFBYSxVQUFVLFVBQU8sQ0FBQztBQUNsRCxNQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsb0JBQWtCLEdBQUcsY0FBVyxDQUFDO0FBQy9ELE1BQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxvQkFBa0IsR0FBRyxjQUFXLENBQUM7R0FDcEQ7O0FBRUQsV0FBUyxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRTtBQUN0QyxRQUFJLEdBQUcsR0FBRyxZQUFZLEVBQUU7QUFDdEIsU0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQSxHQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7S0FDL0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFDbEIsU0FBRyxHQUFHLENBQUMsQ0FBQztBQUNSLGdCQUFVLEdBQUcsR0FBRyxDQUFDO0tBQ2xCLE1BQU07QUFDTCxTQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ1g7O0FBRUQsV0FBTztBQUNMLFNBQUcsRUFBRSxHQUFHO0FBQ1IsZ0JBQVUsRUFBRSxVQUFVO0tBQ3ZCLENBQUM7R0FDSDs7QUFFRCxXQUFTLFFBQVEsR0FBRztBQUNsQixVQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2QsUUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztHQUN6Qjs7QUFFRCxXQUFTLFVBQVUsR0FBRztBQUNwQixVQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2YsUUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztHQUN6QjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdjb21wb25lbnQnKVxuICAuZGlyZWN0aXZlKCd0aUxpc3RJdGVtJywgTGlzdEl0ZW0pXG4gIC5jb250cm9sbGVyKCdMaXN0SXRlbUN0cmwnLCBMaXN0SXRlbUN0cmwpO1xuXG5mdW5jdGlvbiBMaXN0SXRlbSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9saXN0X2l0ZW0vbGlzdF9pdGVtLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdMaXN0SXRlbUN0cmwgYXMgY3RybCcsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBzY29wZToge1xuICAgICAgaWQ6ICdAJyxcbiAgICAgIGltZzogJ0AnLFxuICAgICAgZGVzY3JpcHRpb246ICdAJyxcbiAgICAgIGFtb3VudDogJ0AnLFxuICAgICAgY2xpY2tlZDogJyYnXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBMaXN0SXRlbUN0cmwoSW50ZXJhY3Rpb24sIFByZWZpeCwgJGVsZW1lbnQsICR3aW5kb3cpIHtcbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIHZhciBkaWYsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbCA9ICRlbGVtZW50LmNoaWxkcmVuKCkuY2hpbGRyZW4oKVsxXSxcbiAgICAgIGNsb3NlZE9mZnNldCA9IDAsXG4gICAgICBvcGVuZWRPZmZzZXQgPSAtMTAwLFxuICAgICAgaXNPcGVuID0gZmFsc2U7XG5cbiAgJGVsZW1lbnQuYmluZCgndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBvZmZzZXQgPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgZGlmID0gMDtcbiAgfSk7XG5cbiAgJGVsZW1lbnQuYmluZCgndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChJbnRlcmFjdGlvbi5zY3JvbGxpbmcoKSkgcmV0dXJuO1xuXG4gICAgZGlmID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBvZmZzZXQ7XG5cbiAgICBpZiAoaXNPcGVuKVxuICAgICAgbW92ZVdoZW5PcGVuKGRpZik7XG4gICAgZWxzZSBpZiAoZGlmIDwgMClcbiAgICAgIG1vdmVXaGVuQ2xvc2VkKGRpZik7XG5cbiAgICBJbnRlcmFjdGlvbi5tb3ZpbmcodHJ1ZSk7XG4gIH0pO1xuXG4gICRlbGVtZW50LmJpbmQoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFpc09wZW4gJiYgJHdpbmRvdy5NYXRoLmFicyhkaWYpIDwgNSlcbiAgICAgIHJldHVybiBjdHJsLmNsaWNrZWQoe2lkOiBjdHJsLmlkfSk7XG5cbiAgICBpZiAoZGlmID4gb3BlbmVkT2Zmc2V0IC8gMylcbiAgICAgIG1ha2VDbG9zZWQoKTtcbiAgICBlbHNlXG4gICAgICBtYWtlT3BlbigpO1xuXG4gICAgSW50ZXJhY3Rpb24ubW92aW5nKGZhbHNlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbW92ZVdoZW5PcGVuKGRpZikge1xuICAgIG1vdmUob3BlbmVkT2Zmc2V0ICsgZGlmKTsgXG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlV2hlbkNsb3NlZChkaWYpIHtcbiAgICBtb3ZlKGRpZik7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKG5ld0RpZiwgbmV3VHJhbnNpdGlvbiA9IDApIHtcbiAgICB2YXIgeyBkaWYsIHRyYW5zaXRpb24gfSA9IHBhcnNlTW92ZW1lbnQobmV3RGlmLCBuZXdUcmFuc2l0aW9uKTtcbiAgICBlbC5zdHlsZVtQcmVmaXggKyAndHJhbnNpdGlvbiddID0gYGxpbmVhciAke3RyYW5zaXRpb259cyBhbGxgO1xuICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgbGluZWFyICR7dHJhbnNpdGlvbn1zIGFsbGA7XG4gICAgZWwuc3R5bGVbUHJlZml4ICsgJ3RyYW5zZm9ybSddID0gYHRyYW5zbGF0ZTNkKCR7ZGlmfXB4LCAwLCAwKWA7XG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7ZGlmfXB4LCAwLCAwKWA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1vdmVtZW50KGRpZiwgdHJhbnNpdGlvbikge1xuICAgIGlmIChkaWYgPCBvcGVuZWRPZmZzZXQpIHtcbiAgICAgIGRpZiA9IChkaWYgLSBvcGVuZWRPZmZzZXQpIC8gMyArIG9wZW5lZE9mZnNldDtcbiAgICB9IGVsc2UgaWYgKGRpZiA+IDApIHtcbiAgICAgIGRpZiA9IDA7XG4gICAgICB0cmFuc2l0aW9uID0gMC4yO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWYgPSBkaWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpZjogZGlmLFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvblxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlT3BlbigpIHtcbiAgICBpc09wZW4gPSB0cnVlO1xuICAgIG1vdmUob3BlbmVkT2Zmc2V0LCAwLjIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUNsb3NlZCgpIHtcbiAgICBpc09wZW4gPSBmYWxzZTtcbiAgICBtb3ZlKGNsb3NlZE9mZnNldCwgMC4yKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
})();
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/list_item/list_item.html',
    '<div ng-class="{ \'ListItem--withImage\': ctrl.img}" class="ListItem"><div class="ListItem-optionsLayer"><div class="ListItem-option">Remove</div></div><div class="ListItem-baseLayer"><img class="ListItem-image" ng-show="ctrl.img" ng-src="{{ ctrl.img }}"><div class="ListItem-details"><div class="ListItem-description">{{ ctrl.description }}</div><div ng-show="ctrl.amount">€ {{ ctrl.amount }}</div></div></div></div>');
}]);
})();

(function(){
"use strict";

angular.module("component").directive("tiInputText", InputText).controller("InputTextCtrl", InputTextCtrl);

function InputText() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "components/input_text/input_text.html",
    controller: "InputTextCtrl as ctrl",
    bindToController: true,
    scope: {
      input: "="
    }
  };
}

function InputTextCtrl() {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pbnB1dF90ZXh0L2lucHV0X3RleHQuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5wdXRfdGV4dC9pbnB1dF90ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDbkIsU0FBUyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FDbkMsVUFBVSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7QUFFOUMsU0FBUyxTQUFTLEdBQUc7QUFDbkIsU0FBTztBQUNMLFdBQU8sRUFBRSxJQUFJO0FBQ2IsWUFBUSxFQUFFLEdBQUc7QUFDYixlQUFXLEVBQUUsdUNBQXVDO0FBQ3BELGNBQVUsRUFBRSx1QkFBdUI7QUFDbkMsb0JBQWdCLEVBQUUsSUFBSTtBQUN0QixTQUFLLEVBQUU7QUFDTCxXQUFLLEVBQUUsR0FBRztLQUNYO0dBQ0YsQ0FBQztDQUNIOztBQUVELFNBQVMsYUFBYSxHQUFHLEVBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAubW9kdWxlKCdjb21wb25lbnQnKVxuICAuZGlyZWN0aXZlKCd0aUlucHV0VGV4dCcsIElucHV0VGV4dClcbiAgLmNvbnRyb2xsZXIoJ0lucHV0VGV4dEN0cmwnLCBJbnB1dFRleHRDdHJsKTtcblxuZnVuY3Rpb24gSW5wdXRUZXh0KCkge1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW5wdXRfdGV4dC9pbnB1dF90ZXh0Lmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdJbnB1dFRleHRDdHJsIGFzIGN0cmwnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGlucHV0OiAnPSdcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIElucHV0VGV4dEN0cmwoKSB7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
})();
(function(module) {
try {
  module = angular.module('component');
} catch (e) {
  module = angular.module('component', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/input_text/input_text.html',
    '<div class="InputText" ng-class="{ \'InputText--hasContent\': userInput }"><input ng-model="userInput" type="text" class="InputText-input"> <label class="InputText-label">Full Name</label></div>');
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
    '<ul class="TripsList"><li ng-repeat="item in ctrl.list" class="TripsList-item"><ti-list-item id="{{ item.id }}" img="{{ item.img }}" amount="{{ item.amount }}" description="{{ item.description }}"></ti-list-item></li></ul>');
}]);
})();
