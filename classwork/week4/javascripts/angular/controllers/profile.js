// angular/controllers/todo.js
angular.module("MyApp") // Note: no dependencies
  .controller("ProfileCtrl", function($scope) {
    $scope.profile = function() {
      console.log("in the profile woo");
    };
  });

  