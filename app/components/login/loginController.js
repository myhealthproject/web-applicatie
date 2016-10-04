'use strict';

angular.module('myHealth.LoginCtrl', ['ngRoute', 'ngCookies'])


    .controller('LoginCtrl',
        ['$scope', '$rootScope', '$location', 'AuthenticationService', function ($scope, $rootScope, $location, AuthenticationService) {
            AuthenticationService.ClearCredentials();

            $scope.sendLoginForm = function (form) {
              AuthenticationService.Login($scope.user, form, function(response) {
                if(response.success) {
                  AuthenticationService.SetCredentials($scope.user.username, response.key);
                  $location.path('/profile');
                } else {
                  $scope.error = response.message;
                }
              });
            };
          }]);