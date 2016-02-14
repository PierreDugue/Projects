'use strict';

/**
 * @ngdoc function
 * @name d3TrackerApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the d3TrackerApp
 */
angular.module('d3TrackerApp')
    .controller('DetailsCtrl', function ($scope, $routeParams, serviceTracker) {
 
        serviceTracker.getDetailsChar($routeParams).then(function (datas) {
            console.log(datas);
            $scope.datasChar = datas;
        },
            function (data) {
                console.log("FAIL");
            });
    });
