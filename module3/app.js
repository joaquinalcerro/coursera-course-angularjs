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
				//narrowController.items = apiResponse.data;
				console.log(narrowController.apiResponse);
				narrowController.apiResponse.then(function (response) {
					narrowController.items = response.data.menu_items
				})

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
