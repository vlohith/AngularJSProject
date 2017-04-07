'use strict';

angular.module('myPortfolio.profile',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/profile',{
		templateUrl : 'views/profile/profile.html',
		controller : 'profileCtrl'
	});
}])

.controller('profileCtrl',['$scope','$http',function($scope,$http){
	$http({
		'method' : 'get',
		'url' : 'json/profile.json'
	})
	.then(function successCallback(response){
		var respData = response.data;
		var summaryData = respData.summary;
		var educationData = respData.education;
		var skillsData = respData.skills;
		$scope.summaryData = summaryData;
		$scope.educationImg = educationData.image;
		$scope.university = educationData.university;
		$scope.degree = educationData.degree;
		$scope.year = educationData.year;
		$scope.place = educationData.place;

		var skillsFirst = skillsData.splice(0,4);

		$scope.firstSet = skillsFirst;
		$scope.lastSet = skillsData;

	}, function errorCallback(response){

	});
}]);