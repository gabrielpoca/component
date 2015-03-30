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

  ctrl.description = $attrs.description;
  ctrl.img = $attrs.img;

  var dif,
      offset,
      closedOffset = 0,
      openedOffset = -120,
      isOpen = false;

  $element.bind('touchstart', function(e) {
    offset = e.touches[0].pageX;
  });

  $element.bind('touchmove', function(e) {
    if (Interaction.scrolling()) return;

    dif = e.touches[0].clientX - offset;

    if (isOpen)
      move(dif + openedOffset);
    else if (dif < 0)
      move(dif);

    Interaction.moving(true);
  });

  $element.bind('touchend', function() {
    if (dif > openedOffset / 3)
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
