(function	(){
	'use strict'

	angular.module('ShoppingList', [])
	.controller('ToBuyListController', ToBuyListController)
	.controller('AlreadyBoughtListController', AlreadyBoughtListController)


	ToBuyListController.$inject = ['$scope'];
	function ToBuyListController($scope) {
		$scope.shoppingList = [
												{name: 'Bags', quantity: "10" },
												{name: 'Cookies', quantity: "8" },
												{name: 'Boxes of cereal', quantity: "2" },
												{name: 'Liters of milk', quantity: "3" },
												{name: 'Bottles of Water', quantity: "5" }
				];


	};


	AlreadyBoughtListController.$inject = ['$scope'];
	function AlreadyBoughtListController($scope) {
		$scope.boughtList = [
											{name: 'Cookies', quantity: "10"}
			];



	};


})();
