'use strict';

angular.module('myPortfolio.workExp',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/exp',{
		templateUrl : 'views/workExp/workExp.html',
		controller : 'workExpCtrl'
	});
}])

.controller('workExpCtrl',['$scope','$http',function($scope,$http){
	$http({
		method : 'get',
		url : 'json/workExp.json'
	}).then(function successCallback(response){
		$scope.exp = response.data;
	},function errorCallback(response){
		console.log("Error");
	});

}]);