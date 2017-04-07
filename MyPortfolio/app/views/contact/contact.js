'use strict';

angular.module('myPortfolio.contact',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/contact',{
		templateUrl : 'views/contact/contact.html',
		controller : 'contactCtrl'
	});
}])

.controller('contactCtrl',[function(){

}]);