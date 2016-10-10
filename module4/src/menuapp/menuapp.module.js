(function () {
  'use strict'
  
  angular.module('MenuApp', ['ui.router', 'MenuData'])
  .controller('MenuAppController', MenuAppController);
  
  MenuAppController.$inject = ['MenuDataService'];
  function MenuAppController(MenuDataService) {
    var menuController = this;
    menuController.categories = [];

    menuController.$onInit = function () {
      MenuDataService.getAllCategories()
      .then(function(result) {
        console.log(result);
        menuController.categories = result.data;
      });
    };
  };
  
})();