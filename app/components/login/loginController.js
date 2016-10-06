'use strict';

angular.module('myHealth.LoginCtrl', ['ngRoute', 'ngCookies'])


    .controller('LoginCtrl',
        ['$scope', '$rootScope', '$location', 'AuthenticationService', function ($scope, $rootScope, $location, AuthenticationService) {
            if ($rootScope.globals.currentUser != null) {
                AuthenticationService.ClearCredentials();
                $rootScope.$emit('loggedOut');
            }

            if (AuthenticationService.blockLogin()) {
                $scope.loginBlocked = AuthenticationService.blockLogin();
            }

            $scope.sendLoginForm = function (form) {
                AuthenticationService.SetAttempt();

                if (AuthenticationService.blockLogin()) {
                    $scope.loginBlocked = AuthenticationService.blockLogin();
                }
                AuthenticationService.Login($scope.user, form, function(response) {

                    if(response.success) {
                        AuthenticationService.ClearCredentials();
                        AuthenticationService.SetCredentials(response);
                        $rootScope.$emit('loggedIn');
                        $location.path('/profile');
                    } else {
                        AuthenticationService.SetAttempt();
                        $scope.error = response.message;
                    }
                });
            };

        }]);