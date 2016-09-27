'use strict';

angular.module('myHealth.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: './app/components/login/loginView.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.sendLoginForm = function (user) {
    alert("Username: " + user.username + "\n" + "Password: " + user.password);
  }
}]);