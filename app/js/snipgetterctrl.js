(function(){


var app = angular.module('tripSnipModule'); //attaches the module created in app.js to this file.

app.controller("snipGetterCtrl", function($scope, snippetStorage){
	//sets new variable to equal data retrieved from factory
	var countryObj = snippetStorage.getSnip();

	//sets countryObj variable to scope so it can appear on html
	$scope.countryObj = countryObj;

	console.log(countryObj);
	console.log($scope.countryObj);
});


})();
