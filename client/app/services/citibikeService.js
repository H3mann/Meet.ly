angular.module('MeetlyApp.citibikeService', [])

.factory ('citibikeFactory', function ($http) {

	var getData = function () {

		return $http({
			method: 'GET',
			url: 'http://api.citybik.es/citi-bike-nyc.json'
		})		
	};

	return {
		getData: getData
	};
	console.log('%%%',getData);

});