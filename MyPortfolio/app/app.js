'use strict';

// Declare app level module which depends on views, and components
angular.module('myPortfolio', [
  'ngRoute',
  'myPortfolio.home',
  'myPortfolio.profile',
  'myPortfolio.workExp',
  'myPortfolio.projects',
  'myPortfolio.about'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('headerCtrl',['$scope','$http',function($scope,$http){
	loadHeader($scope,$http);
}])

.controller('footerCtrl',['$scope','$http',function($scope,$http){
	loadFooter($scope,$http);
}]);

function loadHeader($scope,$http){
	console.log("Loading Header");
	$scope.header = {name: "header.html", url: "views/header/header.html"};
	$http({
		method : 'get',
		url: 'json/header.json'
	}).then(function successCallback(response){
		var respData = response.data;
		$scope.name = respData.name;
		$scope.navbar = respData.navbar;
		console.log($scope.name);

	},function errorCallback(response){
		console.log(response);
	});
}

function loadFooter($scope,$http){
	console.log("Loading Footer");
	$scope.footer = {name: "footer.html", url: "views/footer/footer.html"};
	$http({
		method : 'get',
		url: 'json/footer.json'
	}).then(function successCallback(response){
		var respData = response.data;
		$scope.place = respData.place;
		$scope.phone = respData.phone;
		$scope.email = respData.email;
		$scope.copyright = respData.copyright;
		console.log(respData);

	},function errorCallback(response){
		console.log(response);
	});
}
