'use strict';

// Declare app level module which depends on views, and components
angular.module('myHealth', [
    'ngRoute',
    'myHealth.registerCtrl',
    'myHealth.loginCtrl',
    'myHealth.profileCtrl',
    'myHealth.billsCtrl',
    'myHealth.measurementsCtrl',
    'config'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
