// angular/controllers/todo.js
angular.module("MyApp") // Note: no dependencies
.controller("GameCtrl", function($scope, $state, $interval) {
	$scope.points=0;
	$scope.time=0;
	$scope.started=false;

	$scope.start = function () {
		$scope.started=true;
		$interval(function(){
			$("#target-box").animate({
				"left": Math.floor(Math.random() * (window.innerWidth-100))+"px",
				"top": Math.floor(Math.random() * (window.innerHeight-100))+"px"
			});
			$scope.time+=1;
		}, 1000);
	}

	$scope.addPoint = function() {
		if($scope.started){
			$scope.points+=1;
			if($scope.points == 10){
				$state.go("winner");
			}
		}
	}
    // Hint: use $state.go("winner") to go to the winning state
});

