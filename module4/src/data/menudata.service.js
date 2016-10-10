(function () {
  'use strict'
  
  angular.module('MenuData').service('MenuDataService', MenuDataService).constant('APIbasePath', "https://davids-restaurant.herokuapp.com");
  
  MenuDataService.$inject = ['$http', 'APIbasePath'];
  function MenuDataService($http, APIbasePath) {
   var menuDataService = this;
   
   menuDataService.getAllCategories = function () {
     var response = $http({
				method: "GET",
				url: (APIbasePath + '/categories.json')
				// params: {}
			});
			return response
   };
   
   menuDataService.getItemsForCategory = function (categoryShortName) {
     var response = $http({
				method: "GET",
				url: (APIbasePath + '/menu_items.json'),
				params: {category: categoryShortName}
			});
			return response
   };
    
  }
})();