'use strict';

angular.module('myHealth.billCtrl', ['ngRoute'])

    .controller('BillCtrl',
        ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

            var req = {
                method: 'Get',
                url: 'http://henkdieter.com/api/getbillsbyuserid/' + $rootScope.globals.currentUser.user._id,
            };

            $http(req).then(function callBack(response) {
                if (response.status == "200") {
                    $scope.allBillsOfUser = response.data.bills;
                }
            }, function error(response) {
                alert('Response: ' + response.message);
            })

    }])

