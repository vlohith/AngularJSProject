'use strict';

angular.module('myPortfolio.home',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl : 'views/home/home.html',
		controller : 'homeCtrl'
	})
}])

.controller('homeCtrl',['$scope','$http',function($scope, $http){

	console.log("Dude wats up");

	$http({
  		method: 'GET',
  		url: 'json/home.json'
	}).then(function successCallback(response) {
    	// this callback will be called asynchronously
    	// when the response is available
    	$scope.greet = response.data.greet;
    	$scope.intro = response.data.intro;
    	$scope.more = response.data.more;
  	}, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    console.log(response);
  	});

}]);