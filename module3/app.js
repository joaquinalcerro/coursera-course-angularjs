(function() {
	'use strict'

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('APIbasePath', "https://davids-restaurant.herokuapp.com");


	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
			var narrowController = this;
			narrowController.searchText = "";

			narrowController.getItems = function (query) {
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
				})
				.catch(function (eror) {
					console.log('Terrible error');
				});
			}	

			narrowController.removeItem = function (id) {
				var index = -1;
				for (var i=0; i<narrowController.items.length; i++) {
					if (narrowController.items[i].id === id) {
						index = i;
						break;
					}
				};
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