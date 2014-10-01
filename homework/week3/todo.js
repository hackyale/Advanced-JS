angular.module("Todo", []).controller("TodoCtrl", function($scope) {
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

  // Ex. 2 Bonus: Detect all keypresses
  angular.element($window).bind("keypress", function(e) {
    console.log(e);
    // Do something with the event here
  })
});

