(function() {
	'use strict';

	angular.module('LunchCheck', []).controller('LunchCheckController',
			LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.list = "";
		$scope.messageClass = "";

		$scope.check = function() {
			var listArray = $scope.list.split(',');
			var filtered = listArray.filter(function(el) {return el.trim().length != 0});
			if(filtered.length === 0) {
				$scope.message = 'Please enter data first';
				$scope.messageClass = 'emptyContent';
			} else if (filtered.length <= 3) {
				$scope.message = 'Enjoy!';
				$scope.messageClass = 'haveContent';
			} else {
				$scope.message = 'Too much!';
				$scope.messageClass = 'haveContent';
			}
			
		};
	}

})();
