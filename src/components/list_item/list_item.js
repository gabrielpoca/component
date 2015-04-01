angular
  .module('component')
  .directive('tiListItem', ListItem)
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

function ListItemCtrl(Interaction, Prefix, $element, $attrs) {
  var ctrl = this;

  var dif,
      offset,
      el = $element.children().children()[1],
      closedOffset = 0,
      openedOffset = -100,
      isOpen = false;

  $element.bind('touchstart', function(e) {
    offset = e.touches[0].pageX;
  });

  $element.bind('touchmove', function(e) {
    if (Interaction.scrolling()) return;

    dif = e.touches[0].clientX - offset;

    if (isOpen)
      moveWhenOpen(dif);
    else if (dif < 0)
      moveWhenClosed(dif);

    Interaction.moving(true);
  });

  $element.bind('touchend', function() {
    if (dif > openedOffset / 3)
      makeClosed();
    else
      makeOpen();

    Interaction.moving(false);
  });

  function moveWhenOpen(dif) {
    move(openedOffset + dif); 
  }

  function moveWhenClosed(dif) {
    move(dif);
  }

  function move(dif, transition = 0) {
    dif = restrainMove(dif);

    el.style[Prefix + 'transition'] = `linear ${transition}s all`;
    el.style.transition = `linear ${transition}s all`;
    el.style[Prefix + 'transform'] = `translate3d(${dif}px, 0, 0)`;
    el.style.transform = `translate3d(${dif}px, 0, 0)`;
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
