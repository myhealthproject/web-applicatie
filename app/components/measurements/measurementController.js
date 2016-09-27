'use strict';

angular.module('myHealth.measurements', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/measurements', {
            templateUrl: './app/components/measurements/measurementView.html',
            controller: 'MeasurementsCtrl'
        });
    }])

    .controller('MeasurementsCtrl', ['$scope', function($scope) {

    }]);