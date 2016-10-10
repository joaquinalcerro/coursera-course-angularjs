(function () {
  'use strict'
  angular.module('MenuData').component('item', {
    templateUrl: 'src/item/templates/item.template.html',
    controller: ItemController,
    bindings: {
      items: '<'
    }
  });
  
  function ItemController() {
    var $ctrl = this;
    
    
    
  };
  

})();