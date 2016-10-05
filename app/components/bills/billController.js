'use strict';

angular.module('myHealth.billCtrl', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bills', {
            templateUrl: './app/components/bills/billsView.html',
            controller: 'BillCtrl'
        });
    }])

    .controller('BillCtrl', ['$scope', '$http', function($scope, $http, $location) {
            var req = {
                method: 'Get',
                url: 'http://henkdieter.com/api/bill/id', // TODO + user_id,
        };

        $http(req).then(function callBack(response) {
            if (response.data.success) {
                alert('rekeningen gevonden');

            } else {
                alert("Fout: " + response.data.message);
            }
        }, function error(response) {
            alert('Response: ' + response.message);
        })
    }])


    .controller('BillCtrl', ['$scope', function($scope) {
        $scope.bills = {
            BillId: 'A.boiten',
            UserId: 'Arwyn',
            Status: 'boiten',
            Billdescription: 'Te dure medicijnen',
            BillCode: 'blabla',
            BillPrice: '55.00'
        };
    }]);

