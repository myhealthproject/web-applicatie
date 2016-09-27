'use strict';

angular.module('myHealth.bills', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bills', {
            templateUrl: './app/components/bills/billView.html',
            controller: 'BillCtrl'
        });
    }])

    .controller('BillCtrl', ['$scope', function($scope) {

    }]);