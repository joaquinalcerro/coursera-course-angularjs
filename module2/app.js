(function	(){
	'use strict'

	angular.module('ShoppingList', [])
	.controller('ToBuyListController', ToBuyListController)
	.controller('AlreadyBoughtListController', AlreadyBoughtListController)
	.service('ShoppingListService', ShoppingListService);


	ToBuyListController.$inject = ['$scope', 'ShoppingListService'];
	function ToBuyListController($scope, ShoppingListService) {
		var toBuyList = this;

		toBuyList.buyItem = function (item) {
			ShoppingListService.addItemBoughtList(item.name, item.quantity);
			ShoppingListService.deleteItemShoppingList(item.name);
			toBuyList.shoppingListEmpty = ShoppingListService.isShoppingListEmpty();
		}

		toBuyList.shoppingListEmpty = ShoppingListService.isShoppingListEmpty();
		toBuyList.shoppingList = ShoppingListService.getShoppingListItems();
			
	}


	AlreadyBoughtListController.$inject = ['$scope', 'ShoppingListService'];
	function AlreadyBoughtListController($scope, ShoppingListService) {
		var boughtList = this;

		boughtList.boughtListEmpty = true;
		boughtList.items = ShoppingListService.getBoughtListItems();

	}

	function ShoppingListService() {
		var service = this;

		var shoppingListItems = [
												{name: 'Bags', quantity: "10" },
												{name: 'Cookies', quantity: "8" },
												{name: 'Boxes of cereal', quantity: "2" },
												{name: 'Liters of milk', quantity: "3" },
												{name: 'Bottles of Water', quantity: "5" }
				];


		var boughtListItems = [];

		service.addItemBoughtList = function (itemName, itemQuantity) {
			var item = { name: itemName, quantity: itemQuantity };
			boughtListItems.push(item);
		};

		service.deleteItemShoppingList = function (itemName) {
			var itemIndex = 0;
			for (var i=0; i<shoppingListItems.length; i++) {
				if (shoppingListItems[i].name == itemName) {
					itemIndex = i;
				}
			};
			shoppingListItems.splice(itemIndex, 1);
		};

		service.getShoppingListItems = function () {
			return shoppingListItems;
		};

		service.getBoughtListItems = function () {
			return boughtListItems
		};

		service.isShoppingListEmpty = function () {
			if (shoppingListItems.length > 0) {
				return false;
			} else {
				return true;
			}
		};

		service.isBoughtListEmpty = function () {
			if (boughtListItems.length > 0) {
				return false;
			} else {
				return true;
			}
		};

	};


})();
