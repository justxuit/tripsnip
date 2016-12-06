(function(){

var app = angular.module("tripSnipModule", ["ngRoute"]);

//routes
app.config(function($routeProvider){

  $routeProvider.when("/create", {
    templateUrl: "../partials/create.html",
  });

  $routeProvider.when("/snips", {
    templateUrl: "../partials/snips.html",
    controller: "snipCreatorCtrl"
  });

  $routeProvider.when("/about", {
    templateUrl: "../partials/about.html",
  });

  $routeProvider.otherwise({
    templateUrl: "../partials/splash.html"
  });

});



/*TEST*/
app.controller("snipCreatorCtrl", function ($scope){
  $scope.snippetData = [
    {
      country: "Spain",
      nativeName: "Espana",
      population: 2
    },
    {
      country: "France",
      nativeName: "France",
      population: 10
    }
  ];
});


app.directive('snipCreator', function(){
  return {
    restrict: "E",
    templateUrl: "../partials/snip-template.html"
  };
});


})();
