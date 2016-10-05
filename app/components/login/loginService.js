'use strict';

angular.module('myHealth.Authentication', ['ngRoute', 'ngCookies'])

.factory('AuthenticationService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
        function ($http, $cookieStore, $rootScope, $timeout) {
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

            service.SetCredentials = function (response) {

                $rootScope.globals = {
                    currentUser: {
                        user: response.user,
                        token: response.key
                    }
                };

                $http.defaults.headers.common['token'] =  response.key; // jshint ignore:line
                $cookieStore.put('globals', $rootScope.globals);
            };

            service.ClearCredentials = function () {
                $rootScope.globals = {};
                $cookieStore.remove('globals');
                $http.defaults.headers.common.token = '';
            };


            service.SetAttempt = function() {
                if($rootScope.globals.attemps == null) {
                    $rootScope.globals.attemps = 1
                }
                else {
                    $rootScope.globals = {attemps: $rootScope.globals.attemps + 1}
                }

                $cookieStore.put('globals', $rootScope.globals);
            }

            service.blockLogin = function() {
                if($rootScope.globals.attemps >= 4){
                    $timeout(function () {
                        $rootScope.globals.attemps = {};
                        $cookieStore.put('globals', $rootScope.globals);
                    }, 180000);
                    return true;
                } else {
                    return false;
                }
            }


            return service;
        }])