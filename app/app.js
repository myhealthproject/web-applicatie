'use strict';

// Declare app level module which depends on views, and components
angular.module('myHealth', [
  'ngRoute',
  'myHealth.register',
  'myHealth.login'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
