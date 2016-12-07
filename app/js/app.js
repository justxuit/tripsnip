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



})();
