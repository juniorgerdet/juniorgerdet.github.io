/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('myApp', [
'ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate', 'hljs',		//additional angular modules
'angular-textcolor'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', 'hljsServiceProvider', function($routeProvider, $locationProvider, $compileProvider, hljsServiceProvider) {
	hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    	tabReplace: '    '
  	});
	/**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server
	
	// var staticPath ='/';
	var staticPath;
	// staticPath ='/angular-directives/angular-textcolor/';		//local
	staticPath ='/';		//nodejs (local)
	// staticPath ='/angular-textcolor/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath+'partials/';
	
	
	$routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});

	$routeProvider.otherwise({redirectTo: appPathRoute+'home'});
	
}]);