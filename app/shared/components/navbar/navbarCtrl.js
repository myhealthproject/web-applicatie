angular.module('myHealth.navbarCtrl', ['ngRoute'])

.controller('navbarCtrl', function ($scope) {
    $scope.items = [
        {'name': 'Home', "needAuthentication": false},
        {'name': 'About', "needAuthentication": false},
        {'name': 'Settings', "needAuthentication": true},
        {'name': 'Logout', "needAuthentication": true}
    ];

    $scope.tabsLogin = [
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

    $scope.tabsProfile = [
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
        }
    ]

    $scope.beforeLogin = function (scope) {
        return $scope.tabsLogin;
    }

    $scope.afterLogin = function (scope) {
        return $scope.tabsProfile
    }
});