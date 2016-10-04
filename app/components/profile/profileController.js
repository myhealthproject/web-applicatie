'use strict';

angular.module('myHealth.profileCtrl', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: './app/components/profile/profileView.html',
            controller: 'ProfileCtrl'
        });
    }])

    .controller('ProfileCtrl', ['$scope', '$http', function($scope, $http, $location) {
        $scope.textBtnForm = function (user, form) {
            var error = '';

            if (form.$valid) {

                var req = {
                    method: 'Post',
                    url: 'http://henkdieter.com/api/user/', // TODO + user_id,
                    headers: {
                        'Content-Type': 'application/json '
                    },
                    data: {
                        'fname': user.firstname,
                        'lname': user.lastname
                    }
                };

                $http(req).then(function callBack(response) {
                    if (response.data.success) {
                        alert('Gebruikers ingelogd.');

                    } else {
                        alert("Fout: " + response.data.message);
                    }
                }, function error(response) {
                    alert('Response: ' + response.message);
                });

            } else {


                if (!form.firstname.$valid) {
                    error += "Firstname. \n";
                }
                if (!form.lastname.$valid) {
                    error += "Lastname. \n";
                }
                if (!form.lastname.$valid) {
                    error += "Wachtwoord. \n";
                }
                if (error != "") {
                    alert("De volgende velden ontbreken: \n" + error);
                }
            }
        };
    }])



    .controller('ProfileCtrl', ['$scope', function($scope) {
        $scope.user = {
            uname: 'A.boiten',
            firstname: 'Arwyn',
            lastname: 'boiten'
        };
    }]);