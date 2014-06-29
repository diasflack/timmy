
(function(){

//main controller
timestripApp.controller("TimeStripCtrl",function($scope){
	$scope.cool = 'cool';
});

//timer controller
timestripApp.controller("TimerCtrl",function($scope){
	
	var started = false;
	
	$scope.timer = function(){
		started ? $scope.endTimer() : $scope.startTimer()
	};
	
	$scope.startTimer = function(){
		$scope.date_now = Date.now();
		
		started = true;
	};
	
	$scope.endTimer = function(){
		$scope.date_end = Date.now();
		
		$scope.date_diff = $scope.date_end - $scope.date_now;
		
		started = false;
	};
	
	
	
});

}());