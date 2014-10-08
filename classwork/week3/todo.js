angular.module("Todo", [])
  .controller("TodoCtrl", function($scope) {
  $scope.newItem = {}
  $scope.todoList = [
    { text: "Clean room" },
    { text: "Do homework"},
    { text: "Pump iron" }
  ]
  $scope.addItem = function() {
    if ($scope.newItem.text) {
      $scope.todoList.push($scope.newItem);
      $scope.newItem = {};
    }
  }
  $scope.toggleDone = function(index) {
    $scope.todoList[index].done = !$scope.todoList[index].done;
  }
});


