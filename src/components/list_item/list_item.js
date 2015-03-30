angular
.module('component')
.directive('listItem', ListItem)
.controller('ListItemCtrl', ListItemCtrl);

function ListItem() {
  return {
    restrict: 'E',
    templateUrl: 'components/list_item/list_item.html',
    controller: 'ListItemCtrl as ctrl',
    bindToController: true,
    scope: {
      img: '@',
      description: '@'
    }
  };
}


function ListItemCtrl(Interaction, Prefix, $element, $attrs, $window) {
  var ctrl = this,
      el = $element.children().children()[1];

  var closedOffset = 0,
    openedOffset = -120,
    isOpen = false;

  ctrl.description = $attrs.description;
  ctrl.img = $attrs.img;

  var offset, dif;

  $element.bind('touchstart', function(e) {
    offset = e.touches[0].pageX;
  });

  $element.bind('touchmove', function(e) {
    if (Interaction.scrolling()) return;

    dif = e.touches[0].clientX - offset;

    if (isOpen)
      move(dif + openedOffset);
    else
      move(dif);

    Interaction.moving(true);
  });

  $element.bind('touchend', function() {
    if (dif > openedOffset / 2)
      makeClosed();
    else
      makeOpen();

    Interaction.moving(false);
  });

  function move(dif, transition = 0) {
    el.style[Prefix + 'transition'] = `linear ${transition}s all`;
    el.style[Prefix + 'transform'] = `translate3d(${dif}px, 0, 0)`;
    el.styletransform = `translate3d(${dif}px, 0, 0)`;
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
