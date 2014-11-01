'use strict';

/* Directives */


angular.module('gowe').
  directive('message', function() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'app/partials/messages.html'
    };
});


angular.module('gowe').
  directive('circularnavigation', function() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'app/partials/circular-navigation.html'
    };
});


angular.module('gowe').
  directive('marginnavigation', function() {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'app/partials/margin-navigation.html'
    };
});


angular.module('gowe').
  directive('repeatDone', function() {
        return function(scope, element, attrs) {
            if (scope.$last) { // all are rendered
                scope.$eval(attrs.repeatDone);
            }
        }
})