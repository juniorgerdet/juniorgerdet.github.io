/**
* @fileoverview App.js
*
* @author Junior Gerdet
* @email juniorgerdet@gmail.com
* @version 0.1
*/
'use strict';

angular.module('myApp', [
'ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate', 'hljs',		//additional angular modules
'angular-textcolor'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', 'hljsServiceProvider', function($routeProvider, $locationProvider, $compileProvider, hljsServiceProvider) {
	hljsServiceProvider.setOptions({
    	tabReplace: '    '
  	});
	
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server
	
	// var staticPath ='/';
	var staticPath;
	// staticPath ='/angular-directives/angular-textcolor/';		//local
	staticPath ='/angular-textColor/';		//nodejs (local)
	// staticPath ='/angular-textcolor/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath+'partials/';
	
	$routeProvider.when(appPathRoute, {templateUrl: pagesPath+'home.html'})
	.when(appPathRoute+'contact', {templateUrl: pagesPath+'contact.html', controller:'contactCtrl'});

	$routeProvider.otherwise({redirectTo: appPathRoute});
	
}]);