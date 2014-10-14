angular.module("MyApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./templates/home.html",
        controller: "GameCtrl"
      })
      .state("winner", {
        url: "/winner",
        templateUrl: "./templates/winner.html",
      });
    // Make the default route "/" instead of nothing
    $urlRouterProvider.otherwise("/");
  });

