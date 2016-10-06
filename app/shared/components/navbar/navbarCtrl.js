angular.module('myHealth.navbarCtrl', ['ngRoute'])

.controller('navbarCtrl', function ($scope, $rootScope) {

    $scope.tabsBeforeLogin = [
        {
            'name': 'Register',
            'link': '/register',
            'icon': 'fa fa-user'
        },
        {
            'name': 'Login',
            'link': '/login',
            'icon': 'fa fa-unlock'
        }
    ];

    $scope.tabsAfterLogin = [
        {
            'name': 'Profile',
            'link': '/profile',
            'icon': 'fa fa-user'
        },
        {
            'name': 'Measurements',
            'link': '/measurements',
            'icon': 'fa fa-area-chart'
        },
        {
            'name': 'Bills',
            'link': '/bills',
            'icon': 'fa fa-credit-card'
        },
        {
            'name': '',
            'link': '/',
            'icon': 'fa fa-sign-out'
        }]


    $scope.loggedIn = $rootScope.globals.currentUser;
});