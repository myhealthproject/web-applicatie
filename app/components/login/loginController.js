'use strict';

angular.module('myHealth.loginCtrl', ['ngRoute'])


.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.sendLoginForm = function (user) {
      var error = '';

     if(form.$valid) {

         var req = {
             method: 'Post',
             url: 'http://henkdieter.com/api/login',
             headers: {
                 'Content-Type': 'application/json '
             },
             data: {
                 'uname': user.username,
                 'password': user.password
             }
         };
         $http(req).then(function callBack(response) {
             if (response.success) {
                 $window.location.href='/profile';

                 alert(response)
             }
         }, function error(response) {
             alert('Response: ' + response.message);
         });

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





    alert("Error: " + error + "\n");
  };
}])




