'use strict';

angular.module('myHealth.register', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/register', {
        templateUrl: './app/components/register/register.html',
        controller: 'RegisterCtrl'
      });
    }])

    .controller('RegisterCtrl', ['$scope', function($scope) {
      $scope.sendRegisterForm = function (user) {
        var username = $scope.createUsername(user);
        alert("Username: " + username);
      }

      $scope.createUsername = function(user){
        var username = user.firstname.substr(0, 1) + "." + user.lastname;
        return username;
      }
    }]);