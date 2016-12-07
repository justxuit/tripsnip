(function(){

var app = angular.module("tripSnipModule", ["ngRoute"]);

//routes
app.config(function($routeProvider){

  $routeProvider.when("/create", {
    templateUrl: "../partials/create.html",
    controller: "snipCreatorCtrl"
  });

  $routeProvider.when("/snips", {
    templateUrl: "../partials/snips.html", 
  });

  $routeProvider.when("/about", {
    templateUrl: "../partials/about.html"
  });

  $routeProvider.otherwise({
    templateUrl: "../partials/splash.html"
  });
  
});



})();
