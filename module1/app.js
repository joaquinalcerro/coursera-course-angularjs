(function () {
	'use strict';

	angular.module('MyWordCount', [])
	.controller('CountController', CountController); 
	
	
	CountController.$inject = ['$scope'];
	function CountController($scope) {	
		$scope.message = "";
		$scope.food = "";

		function clean(dirtyArray) {
			for (var i=0; i<dirtyArray.length-1; i++) {
				if (dirtyArray[i] == "") {
					dirtyArray = dirtyArray.splice(i,1)
				}
			};
			return dirtyArray;
		}

		$scope.count = function () {
			if ($scope.food != "") {
				var coma = ',';
				var arrayOfStrings = $scope.food.split(coma);
				var arrayOfStrings = clean(arrayOfStrings);
				if (arrayOfStrings.length <= 3) {
					$scope.message = "Enjoy!"
				} else {
					$scope.message = "Too much!"
				}
				console.log(arrayOfStrings);
				console.log(arrayOfStrings.length)
			} else {
				$scope.message = "Please enter data first"
			};	
		};
		
	}

})();
