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
      id: '@',
      img: '@',
      description: '@',
      amount: '@',
      clicked: '&'
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

  $element.bind('touchstart', function(e) {
    offset = e.touches[0].pageX;
    dif = 0;
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
    if (!isOpen && $window.Math.abs(dif) < 5)
      return ctrl.clicked({id: ctrl.id});

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

  function move(newDif, newTransition = 0) {
    var { dif, transition } = parseMovement(newDif, newTransition);
    el.style[Prefix + 'transition'] = `linear ${transition}s all`;
    el.style.transition = `linear ${transition}s all`;
    el.style[Prefix + 'transform'] = `translate3d(${dif}px, 0, 0)`;
    el.style.transform = `translate3d(${dif}px, 0, 0)`;
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
