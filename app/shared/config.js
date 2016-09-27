'use strict';

var app = angular.module('config', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bills', {
            templateUrl: './app/components/bills/billView.html',
            controller: 'BillCtrl'
        });
    }]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: './app/components/login/loginView.html',
            controller: 'LoginCtrl'
        });
    }]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/measurements', {
            templateUrl: './app/components/measurements/measurementView.html',
            controller: 'MeasurementsCtrl'
        });
    }]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: './app/components/profile/profileView.html',
            controller: 'ProfileCtrl'
        });
    }]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: './app/components/register/registerView.html',
            controller: 'RegisterCtrl'
        });
    }]);
