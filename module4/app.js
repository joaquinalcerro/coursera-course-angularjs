(function() {
	'use strict'

	angular.module('MenuApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('APIbasePath', "https://davids-restaurant.herokuapp.com");


	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
			var narrowController = this;
			narrowController.searchText = "";
			narrowController.emptyQuery = false;

			narrowController.getItems = function (query) {
				if (query != "") {
					narrowController.emptyQuery = false;
					narrowController.apiResponse = MenuSearchService.getMatchedMenuItems(query);
					narrowController.apiResponse.then(function (response) {
						narrowController.items = [];
						var itemsFound = [];
						for(var i=0; i<response.data.menu_items.length; i++) {
							var item = response.data.menu_items[i];
							var itemDesc = response.data.menu_items[i].description.toLowerCase();
							if (itemDesc.toLowerCase().indexOf(query.toLowerCase()) >= 1) {
								itemsFound.push(item);
							}
						}
						narrowController.items = itemsFound;
						if (narrowController.items.length <= 0) {narrowController.emptyQuery = true};
					})
					.catch(function (eror) {
						console.log('Terrible error');
					});
				} else {
					narrowController.emptyQuery = true;
				}
			}	

			narrowController.removeItem = function (index) {
				narrowController.items.splice(index, 1);
			}
	}	

	MenuSearchService.$inject = ['$http', 'APIbasePath'];
	function MenuSearchService($http, APIbasePath) {
		var menuService = this;

		menuService.getMatchedMenuItems = function (searchTerm) {

			var response = $http({
				method: "GET",
				url: (APIbasePath + '/menu_items.json')
				// params: {}
			});

			return response;

			
		}			


	}


})();
