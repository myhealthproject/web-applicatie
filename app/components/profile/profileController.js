'use strict';

angular.module('myHealth.profileCtrl', ['ngRoute'])

    .controller('ProfileCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.user = {
            uname: $rootScope.globals.currentUser.user.uname,
            firstname: $rootScope.globals.currentUser.user.fname,
            lastname: $rootScope.globals.currentUser.user.lname
        };

        $scope.photo_url = "https://api.adorable.io/avatars/202/" + $scope.user.firstname + ".png";
    }]);