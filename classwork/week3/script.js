var helloAngular = angular.module("HelloAngular", []);

helloAngular.controller("HelloCtrl", function($scope) {
  $scope.logText = function() {
    console.log($scope.myText);
  }
});

