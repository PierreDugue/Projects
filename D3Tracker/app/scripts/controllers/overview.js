'use strict';

/**
 * @ngdoc function
 * @name d3TrackerApp.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the d3TrackerApp
 */
angular.module('d3TrackerApp')
    .controller('OverviewCtrl', function ($scope, serviceTracker) {

        $scope.battletag = {};
        $scope.getProfile = function () {

            var profile = $scope.battletag.profile;

            serviceTracker.getFromBlizz(profile).then(function (datas) {
                console.log(datas);
                $scope.datasProfile = datas;
            },
                function (data) {
                    console.log("FAIL");
                });
        };

    });
