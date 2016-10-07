'use strict';

angular.module('myHealth.registerCtrl', ['ngRoute'])

    .controller('RegisterCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.showAlert = false;
      $scope.sendRegisterForm = function (user, form) {
          var error = '';
          if(form.$valid) {

              var req = {
                  method: 'POST',
                  url: 'http://henkdieter.com/api/user',
                  headers: {
                      'Content-Type': 'application/json '
                  },
                  data: {
                      'uname': user.username,
                      'fname': user.firstname,
                      'lname': user.lastname,
                      'password': user.password
                  }
              };

              $http(req).then(function callBack(response) {
                  if (response._id != "") {
                      alert('User is created.');
                      $scope.user = null;
                  }
              }, function error(response) {
                  alert('Response: ' + response);
              });
          } else {
              if(!form.firstname.$valid){
                  error += "Voornaam. \n";
              }
              if(!form.lastname.$valid){
                  error += "Achternaam \n";
              }
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
      }

        $rootScope.$on('loggedIn', function() {
            $scope.loggedIn = $rootScope.globals.currentUser;
        });
    }]);