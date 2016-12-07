(function (){
var app = angular.module('tripSnipModule');

app.controller("snipCreatorCtrl", function ($scope){
	$scope.retrieveCountryData = function(){
		console.log($scope.countrySearch);
		console.log($scope.note);


	};







//  $scope.snippetData = [
//    {
//      country: "Spain",
//      nativeName: "Espana",
//      population: 2
//    }
//  ];

});

})();


