'use strict';

angular.module('myPortfolio.projects',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/projects',{
		templateUrl : 'views/projects/projects.html',
		controller : 'projectsCtrl'
	});
}])

.controller('projectsCtrl',['$scope','$http', function($scope,$http){
	console.log("Inside Projects Controller");
	$http({
		method:'get',
		url:'json/projects.json'
	}).then(function successCallback(response){
		$scope.companyProjects = response.data;
	},function errorCallback(response){
		console.log("error retrieving projects data");
	}).finally(function(){
		//$route.reload();
		triggerReveals();
	});
}]);