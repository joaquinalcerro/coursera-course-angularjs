(function () {
	'use strict';

	angular.module('MyWordCount', [])
	.controller('CountController', CountController); 
	
	
	CountController.$inject = ['$scope'];
	function CountController($scope) {	
		$scope.message = "";
		$scope.food = "";
		$scope.type = "";
		$scope.ignoredspaces = "";
		$scope.showTotals = false;
		$scope.showMessages= false;

		function clean(dirtyArray) {
			$scope.totalspaces= 0;
			var newArray = [];
			var countSpaces = 0;
			for (var i=0; i<dirtyArray.length-1; i++) {
				if (dirtyArray[i] == "") {
					$scope.totalspaces++
					$scope.ignoredspaces = 'Remember are NOT considering spaces in your food list.'
				} else {
					newArray.push(dirtyArray[i])
				}
			};
			return(newArray);
		}

		$scope.count = function () {
			if ($scope.food != "") {
				var coma = ',';
				var arrayOfStrings = $scope.food.split(coma);
				var arrayOfStrings = clean(arrayOfStrings);
				$scope.totalitems = arrayOfStrings.length;
				$scope.showTotals = true;
				$scope.showMessages = true;
				if (arrayOfStrings.length <= 3) {
					$scope.message = "Enjoy!";
					$scope.type = 'Ignored'
				} else {
					$scope.message = "Too much!";
					$scope.type = 'Error'
				}
			} else {
				$scope.message = "Please enter data first";
				$scope.type = 'Error';
				$scope.show = true;
				$scope.showMessages = true;
				$scope.totalitems = 0;
			};	
		};
		
	}

})();
