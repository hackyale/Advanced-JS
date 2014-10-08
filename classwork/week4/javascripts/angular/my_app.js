// angular/my_app.js
angular.module("MyApp", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./templates/home.html",
      })
      .state("profile", {
        url: "/profile",
        templateUrl: "./templates/profile.html",
        controller: "ProfileCtrl"
      });
    // Make the default route "/" instead of nothing
    $urlRouterProvider.otherwise("/");
  });

