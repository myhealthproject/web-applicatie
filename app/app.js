'use strict';

// Declare app level module which depends on components, and components
angular.module('myHealth', [
    'ngRoute',
    'ngCookies',
    'myHealth.registerCtrl',
    'myHealth.LoginCtrl',
    'myHealth.profileCtrl',
    'myHealth.billCtrl',
    'myHealth.measurementCtrl',
    'myHealth.navbarCtrl',
    'config',
    'xeditable',
    'myHealth.Authentication'
])
