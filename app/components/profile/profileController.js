'use strict';

angular.module('myHealth.profileCtrl', ['ngRoute'])

    .controller('ProfileCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
        $scope.showEdit = false;

        $scope.toggleEdit = function() {
            if($scope.showEdit) {
                $scope.showEdit = false;
            } else {
                $scope.showEdit = true;
            }
        };

        $scope.edit = function() {
            var req = {
                method: 'Put',
                url: 'http://henkdieter.com/api/user/' + $rootScope.globals.currentUser.user._id,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    'fname': $scope.user.firstname,
                    'lname': $scope.user.lastname
                }
            };
            $http(req);
            $rootScope.globals.currentUser.user.fname = $scope.user.firstname;
            $rootScope.globals.currentUser.user.lname = $scope.user.lastname;
            $scope.toggleEdit();
        };
        $scope.user = {
            uname: $rootScope.globals.currentUser.user.uname,
            firstname: $rootScope.globals.currentUser.user.fname,
            lastname: $rootScope.globals.currentUser.user.lname
        };

    }]);