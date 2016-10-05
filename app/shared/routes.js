'use strict';

var app = angular.module('config', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bills', {
            templateUrl: './app/components/bills/billView.html',
            controller: 'BillCtrl'
        })

        .when('/login', {
            templateUrl: './app/components/login/loginView.html',
            controller: 'LoginCtrl'
        })

        .when('/measurements', {
            templateUrl: './app/components/measurements/measurementView.html',
            controller: 'MeasurementsCtrl'
        })

        .when('/profile', {
            templateUrl: './app/components/profile/profileView.html',
            controller: 'ProfileCtrl'
        })

        .when('/register', {
            templateUrl: './app/components/register/registerView.html',
            controller: 'RegisterCtrl'
        })

        .otherwise({redirectTo: '/login'});
    }])

    .run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['token'] = $rootScope.globals.token; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
                if ($location.path() !== '/register' && $location.path() !== '/login' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });
        }]);

