(function (){
var app = angular.module('tripSnipModule'); //attaches the module created in app.js to this file.

	//creating controller
app.controller("snipCreatorCtrl", function ($scope, $http, snippetStorage, $location){
	//retrieve user-entered data & API (when user clicks snip this function runs)
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
						region: $scope.countryData[0].region,
						icon: "./images/region_icons/" + $scope.countryData[0].region + ".png",
						nativeName: $scope.countryData[0].nativeName,
						capital: $scope.countryData[0].capital,
						language: getLanguage(),
						population: $scope.countryData[0].population.toLocaleString(),
						flag: "https://github.com/hjnilsson/country-flags/blob/master/png250px/" + $scope.countryData[0].alpha2Code.toLowerCase() + ".png?raw=true",
						favePlace: $scope.faveplace,
						faveRestaurant: $scope.faverestaurant,
						faveFood: $scope.favefood,
						rating: $scope.rating,
						date:  $scope.month + " " + $scope.year,
						note: $scope.note
					};

					function getLanguage() {
						var countryLanguage = $scope.countryData[0].languages[0];
						var languageCodes = {
							af: "Afrikaans",
							am: "Amharic",
							ar: "Arabic",
							az: "Azerbaijani",
							be: "Belarusian",
							bg: "Bulgarian",
							bi: "Bislama",
							bn: "Bengali",
							bs: "Bosnian",
							ca: "Catalan",
							cs: "Czech",
							da: "Danish",
							de: "German",
							dv: "Divehi",
							dz: "Dzongkha",
							el: "Greek",
							en: "English",
							es: "Spanish",
							et: "Estonian",
							fa: "Persian",
							fi: "Finnish",
							fo: "Faroese",
							fr: "French",
							ga: "Irish",
							he: "Hebrew",
							hi: "Hindi",
							hr: "Croatian",
							hu: "Hungarian",
							hy: "Armenian",
							id: "Indonesian",
							is: "Icelandic",
							it: "Italian",
							ja: "Japanese",
							ka: "Georgian",
							kk: "Kazakh",
							kl: "Kalaallisut",
							km: "Khmer",
							ko: "Korean",
							ky: "Kyrgyz",
							la: "Latin",
							lo: "Lao",
							lt: "LIthuanian",
							lv: "Latvian",
							mk: "Macedonian",
							mn: "Mongolian",
							ms: "Malay",
							mt: "Maltese",
							my: "Burmese",
							ne: "Nepali",
							nl: "Dutch",
							no: "Norwegian",
							pl: "Polish",
							ps: "Pashto",
							pt: "Portuguese",
							ro: "Romanian",
							ru: "Russian",
							rw: "Kinyarwanda",
							si: "Sinhalese",
							sk: "Slovak",
							sl: "Slovene",
							sm: "Samoan",
							so: "Somali",
							sq: "Albanian",
							sr: "Serbian",
							sv: "Swedish",
							sw: "Swahili",
							tg: "Tajik",
							th: "Thai",
							ti: "Tigrinya",
							tk: "Turkmen",
							tr: "Turkish",
							uk: "Ukrainian",
							uz: "Uzbek",
							vi: "Vietnamese",
							zh: "Chinese",
							undefined:	"Not available"
						};
						//because the api languagecode is a string, we use obj[  ]  to get the property
						return (languageCodes[countryLanguage]);
					};

					console.log(fullData);

					//send all data to the service factory
					snippetStorage.setSnip(fullData);


					//directs to snippets page after user clicks Snip!
					$location.path("/snips");

				//if error in country search box
				}, function errorCallback(response){
					alert("Please check the country spelling");
				});
	};
});

})();
