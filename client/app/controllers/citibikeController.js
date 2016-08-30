angular.module('MeetlyApp.citibikeCtrl', [])

	.controller('citibikeController', function ($scope,citibikeFactory){

		$scope.data = {};
		console.log('$$$',$scope.data);

		$scope.getData = function () {
			citibikeFactory.getData()
			.then(function (info){
				console.log('--->',info)
				$scope.data.bikes = info;
				console.log('*** citibike data', $scope.data.bikes);
			});
		}
	// 	// .catch(function (error){
	// 	// console.log(error);

	// })
		//$scope.getData();
	})