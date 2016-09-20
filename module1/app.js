(function () {
	'use strict';

	angular.module('MyWordCount', [])
	.controller('CountController', CountController); 
	
	
	CountController.$inject = ['$scope'];
	function CountController($scope) {	
		$scope.message = "";
		$scope.food = "";

		function clean(dirtyArray) {
			var newArray = [];
			var countSpaces = 0;
			for (var i=0; i<dirtyArray.length-1; i++) {
				if (dirtyArray[i] == "") {
					countSpaces++
				} else {
					newArray.push(dirtyArray[i])
				}
			};
			return newArray;
			console.log(countSpaces)
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
