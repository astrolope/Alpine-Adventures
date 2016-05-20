angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.alpineAdventures', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alpineAdventures.html',
        controller: 'alpineAdventuresCtrl'
      }
    }
  })

  .state('menu.rivers', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rivers.html',
        controller: 'riversCtrl'
      }
    }
  })

  .state('menu.pricing', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pricing.html',
        controller: 'pricingCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.map', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })
  
    .state('menu.calendar', {
    url: '/calendar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('river', {
    url: '/rivers/:river',
    templateUrl: 'templates/river.html',
    controller: 'riverCtrl'
  })

  .state('menu.info', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});