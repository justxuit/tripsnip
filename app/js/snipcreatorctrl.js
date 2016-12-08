(function (){
var app = angular.module('tripSnipModule'); //attaches the module created in app.js to this file.

app.controller("snipCreatorCtrl", function ($scope, $http, snippetStorage, $location){
	//retrieve user-entered data
	$scope.retrieveCountryData = function(){
		//console.log($scope.countrySearch);
		//console.log($scope.note);

		//retrieve API data for user-entered country
		$http.get("https://restcountries.eu/rest/v1/name/" + $scope.countrySearch + "?fullText=true")
				.then(function(response) { //this runs if request is successful
					$scope.countryData = response.data;
					//console.log($scope.countryData[0].nativeName);
					//set the fullData object
					var fullData = {
						name: $scope.countryData[0].name,
						nativeName: $scope.countryData[0].nativeName,
						capital: $scope.countryData[0].capital,
						population: $scope.countryData[0].population.toLocaleString(),
						flag: "https://github.com/hjnilsson/country-flags/blob/master/png250px/" + $scope.countryData[0].alpha2Code.toLowerCase() + ".png?raw=true",
						note: $scope.note
					};
					console.log(fullData);

					//send all data to the service factory
					snippetStorage.setSnip(fullData);

					//clearing data from user inputs
					$scope.countrySearch = "";
					$scope.note = "";

					//directs to snippets page
					$location.path("/snips");

				//if error in country search box
				}, function errorCallback(response){
					alert("Please check the country spelling");
				});
	};
});

})();
