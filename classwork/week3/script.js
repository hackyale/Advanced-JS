var helloAngular = angular.module("HelloAngular", []); //ONLY the first time

helloAngular.controller("HelloCtrl", function($scope) {
  $scope.logText = function() {
    console.log($scope.myText);
  }
});

