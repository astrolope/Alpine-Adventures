angular.module('app.directives', [])
 
    .directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      coords: '=info'
    },
     template: ' <button href="http://maps.apple.com/?ll={{coords.lat}},{{coords.long}}" id="alpineAdventures-button4" class="button button-assertive  button-block"> Open In Maps </button>'
  };

});

