'use strict';

// Declare app level module which depends on components, and components
angular.module('myHealth', [
    'ngRoute',
    'myHealth.registerCtrl',
    'myHealth.loginCtrl',
    'myHealth.profileCtrl',
    'myHealth.billCtrl',
    'myHealth.measurementCtrl',
    'myHealth.navbarCtrl',
    'config',
    'xeditable',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
