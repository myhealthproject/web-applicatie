'use strict';

angular.module('myHealth.Authentication', ['ngRoute', 'ngCookies'])

.factory('AuthenticationService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
        function ($http, $cookieStore, $rootScope) {
            var service = {};

            service.Login = function (user, form, callback) {
                var error = '';

                if(form.$valid) {

                    var req = {
                        method: 'Post',
                        url: 'http://henkdieter.com/api/login',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'uname': user.username,
                            'password': user.password
                        }
                    };

                    $http(req).success(function (response) {
                        callback(response);
                    })

                } else {


                    if(!form.username.$valid){
                        error += "Username. \n";
                    }
                    if(!form.password.$valid){
                        error += "Wachtwoord. \n";
                    }
                    if(error != ""){
                        alert("De volgende velden ontbreken: \n" + error);
                    }
                }
            };

            service.SetCredentials = function (user, token) {

                $rootScope.globals = {
                    currentUser: {
                        username: username,
                        token: token
                    }
                };

                //$http.defaults.headers.common['Authorization'] = 'Basic ' + token; // jshint ignore:line
                $cookieStore.put('globals', $rootScope.globals);
            };

            service.ClearCredentials = function () {
                $rootScope.globals = {};
                $cookieStore.remove('globals');
                //$http.defaults.headers.common.Authorization = 'Basic ';
            };

            return service;
        }])