angular.module('app.controllers', [])

  .controller('alpineAdventuresCtrl', function ($scope) {

    $scope.slides = [
      {
        caption: "Explore Washington",
        image: "images/Bellevue_river_rafting_green.jpg"
      },
      {
        caption: "Team Building",
        image: "images/IMG_6564.JPG"

      },
      {
        caption: "Rafting in Leavenworth, WA",
        image: "images/seattle_river_rafting_leavenworth.JPG"
      },
      {
        caption: "Family Whitewater",
        image: "images/IMG_1125.JPG"
      },
      {
        caption: "Class IV-V Rapids",
        image: "images/IMG_4904.JPG"
      },
      {
        caption: "Wenatchee Whitewater",
        image: "images/IMG_7194.JPG"
      },
    ];

  })

  .controller('riversCtrl', function ($scope, RiverService, $state) {
    $scope.rivers = RiverService.allRivers;

    $scope.goToRiver = function (id) {
      $state.go("river", {
        river: id
      });
    };

    $scope.pricingOptions = [
      {
        size: "1-6",
        modifier: 0,
      },
      {
        size: "7-14",
        modifier: 5,
      },
      {
        size: "15-24",
        modifier: 10,
      },
      {
        size: "25+",
        modifier: 15,
      },
      {
        size: "12 & Under",
        modifier: 15,
      }
    ];

    $scope.riverFilter = [
      {
        group: "White Water",
        type: "Beginner",
        modifier: 0,
      },
      {
        group: "White Water",
        type: "Intermediate",
        modifier: 0,
      },
      {
        group: "White Water",
        type: "Advanced",
        modifier: 0,
      },
      {
        group: "Scenic Float",
        type: "Tour",
        modifier: 0,
      },
    ];

    console.log($scope.rivers);
  })

  .controller('pricingCtrl', function ($scope, RiverService) {

    $scope.rivers = RiverService.allRivers;

    $scope.groupSize = 0;
    $scope.modifier = 0;
    
    $scope.checkGroupSize = function (groupSize) {
    
    //$scope.modifier = 0;      
      if(groupSize > 7){
        $scope.modifier = 5;
      }
      
      if(groupSize > 15){
        $scope.modifier = 10;
      }
      
      if(groupSize > 21){
        $scope.modifier = 15;
      }

      
        
      console.log(groupSize, $scope.modifier);
    };
  
    $scope.pricingOptions = [
      {
        size: "1-6",
        modifier: 0,
      },
      {
        size: "7-14",
        modifier: 5,
      },
      {
        size: "15-24",
        modifier: 10,
      },
      {
        size: "25+",
        modifier: 15,
      },
      {
        size: "12 & Under",
        modifier: 15,
      }
    ];

    $scope.riverFilter = [
      {
        group: "White Water",
        type: "Beginner",
        modifier: 0,
      },
      {
        group: "White Water",
        type: "Intermediate",
        modifier: 0,
      },
      {
        group: "White Water",
        type: "Advanced",
        modifier: 0,
      },

      {
        group: "Scenic Float",
        type: "Tour",
        modifier: 0,
      },
    ];

    $scope.predicate = 'popularity';
    $scope.reverse = true;
    $scope.order = function (predicate) {
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.predicate = predicate;
    }
   

    // $scope.rivers = RiverService.allRivers;

  })

  .controller('mapCtrl', function ($scope) {

  })

  .controller('calendarCtrl', function ($scope) {

    //$scope.month = "May";
    $scope.options = {
      weekOffset: 1,
      daysOfTheWeek: ['ZO', 'MA', 'DI', 'WO', 'DO', 'VR', 'ZA'],
      constraints: {
        startDate: moment().subtract(1, 'months').format('YYYY-MM-15'),
        endDate: moment().add(2, 'months').format('YYYY-MM-15')
      }
    };
    $scope.events = [
      { date: moment().add(3, 'days').format(), title: "Happy days" },
      { date: moment().subtract(5, 'days').format(), title: "Good old days" },
      { date: moment().subtract(5, 'days').format(), title: "And some more" }
    ];
    
   // $scope.clndr.setEvents($scope.events);
    $scope.showEvents = function (events) {
      alert(events.map(function (e) { return e.title }).join("\n"));
    };
  })

  .controller('riverCtrl', function ($scope, RiverService, $stateParams) {

    $scope.river = RiverService.getRiver($stateParams.river);

    $scope.riverTitle = $scope.river.name;
    
    $scope.geoButton = function (lat, long) {
      return 
    };
    
  $scope.openNavigator = function(lat, long) {
  var geoString = '';

  if(ionic.Platform.isIOS()) {
    geoString = 'maps://?q='+lat+','+long+'';
  }
  else if(ionic.Platform.isAndroid()) {
   
  }
  
  geoString = 'http://maps.apple.com/?ll='+lat+','+long+'';
  window.open(geoString, '_system');
}


  })

  .controller('infoCtrl', function ($scope) {

  })
