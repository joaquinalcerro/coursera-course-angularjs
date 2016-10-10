(function () {
  'use strict'
  angular.module('MenuData').component('category', {
    templateUrl: 'src/category/templates/category.template.html',
    controller: CategoryController,
    bindings: {
      category: '<'
    }
  });
  
  function CategoryController() {
   var $ctrl = this;
   
    
    
  };
  

})();