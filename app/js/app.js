(function(){

var app = angular.module("tripSnipModule", ["ngRoute"]);

//routes
app.config(function($routeProvider){

//allows create.html partial to appear in the ng-view in index.html.  Also attaches the controller to the create.html.
  $routeProvider.when("/create", {
    templateUrl: "./partials/create.html",
    controller: "snipCreatorCtrl",
	  controller: "autoCompleteCtrl"
  });

  $routeProvider.when("/snips", {
    templateUrl: "./partials/snips.html",
    controller: "snipGetterCtrl"
  });

  $routeProvider.when("/about", {
    templateUrl: "./partials/about.html"
  });

  $routeProvider.otherwise({
    templateUrl: "./partials/splash.html"
  });

});

})();
