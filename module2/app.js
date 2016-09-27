(function	(){
	'use strict'

	angular.module('ShoppingList', [])
	.controller('ToBuyListController', ToBuyListController)
	.controller('AlreadyBoughtListController', AlreadyBoughtListController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	ToBuyListController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyListController(ShoppingListCheckOffService) {
		var toBuyList = this;

		toBuyList.buyItem = function (item) {
			ShoppingListCheckOffService.addItemBoughtList(item.name, item.quantity);
			ShoppingListCheckOffService.deleteItemShoppingList(item.name);
		}

		toBuyList.shoppingList = ShoppingListCheckOffService.getShoppingListItems();
			
	}


	AlreadyBoughtListController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtListController(ShoppingListCheckOffService) {
		var boughtList = this;

		boughtList.items = ShoppingListCheckOffService.getBoughtListItems();

	}

	function ShoppingListCheckOffService() {
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

	};


})();
