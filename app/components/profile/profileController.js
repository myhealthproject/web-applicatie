'use strict';

angular.module('myHealth.profileCtrl', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: './app/components/profile/profileView.html',
            controller: 'ProfileCtrl'
        });
    }])

    .controller('ProfileCtrl', ['$scope', function($scope) {

    }]);