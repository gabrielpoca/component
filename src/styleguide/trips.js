angular
  .module('component')
  .controller('TripsCtrl', TripsCtrl);

function TripsCtrl() {
  var ctrl = this;

  ctrl.trips = [
    {
      description: 'RubyconfPT',
      img: 'https://pbs.twimg.com/profile_images/437683020003561474/Z5_SkyHh.jpeg',
      amount: '3.00'
    },
    {
      description: 'Codebits 2015',
      img: 'https://pbs.twimg.com/profile_images/576109715039518720/W9ics_VG.png',
      amount: '3.00'
    },
    {
      description: 'Baruco 2013',
      img: 'https://pbs.twimg.com/profile_images/463686954723184640/QbnVqgX4.png'
    },
  ];
}
