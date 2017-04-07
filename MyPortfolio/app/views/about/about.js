'use strict';

angular.module('myPortfolio.about', ['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	alert("Inside config");
	$routeProvider.when('/about',{
		templateUrl : 'views/about/about.html',
		controller : 'aboutCtrl'
	});
}])
.controller('aboutCtrl',['$scope','$http',function($scope,$http){

	$http({
		method:'get',
		url:'json/about.json'
	}).then(function successCallback(response){
		$scope.about = response.data;
	},function errorCallback (response){
		console.log("error fetching about json data");
	});

}])
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        console.log("url : "+url);
        element.css({
            'background-image': 'url(' + url +')',
        });
    };
});