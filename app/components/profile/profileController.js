'use strict';

angular.module('myHealth.profileCtrl', ['ngRoute'])


    .controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.test = function(){
            alert('test');
        }
    }])



    .controller('ProfileCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.user = {
            uname: $rootScope.globals.currentUser.user.uname,
            firstname: $rootScope.globals.currentUser.user.fname,
            lastname: $rootScope.globals.currentUser.user.lname
        };
    }]);