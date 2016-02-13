'use strict';

/**
 * @ngdoc service
 * @name d3TrackerApp.serviceTracker
 * Getting datas from Blizzard API
 * # serviceTracker
 * Factory in the d3TrackerApp.
 */
angular.module('d3TrackerApp')
    .factory('serviceTracker', function ($http) {

        var url = "https://eu.api.battle.net/d3/profile/";
        var localAndKey = "/?locale=en_GB&apikey=n75p34uvzps72cy3ajsfchpxfmngr6n9";

        // Public API here
        return {
            getFromBlizz: function (battleTagID) {

                var battleTagIdTr = transformId(battleTagID);
                console.log(battleTagIdTr);
                return $http({
                    method: 'GET',
                    url: url + battleTagIdTr + localAndKey
                })
                    .then(function (response) {
                        return response.data;
                    }, function (httpData) {
                        console.log('Error while getting datas');
                    });
            }

        };
    });

var transformId = function (profileId) {
    return profileId.replace("#", "-");
};