'use strict';

angular.module('myHealth.loginCtrl', ['ngRoute'])


.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.sendLoginForm = function (user) {
    alert("Username: " + user.username + "\n" + "Password: " + user.password);
  }
}]);