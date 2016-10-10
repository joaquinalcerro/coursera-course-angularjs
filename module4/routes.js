(function () {
  'use strict';
  
  angular.module('MenuApp').config(RoutesConfig);
  
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    // Redirect to homepage
    $urlRouterProvider.otherwise('/');
    
    // Setup UI States
    $stateProvider
    
    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/MenuApp/templates/home.template.html'
    })
    
    // Categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/MenuApp/templates/categories.template.html'
    })
    
    // Items page
    .state('items', {
      url: '/items',
      templateUrl: 'src/MenuApp/templates/items.template.html'
    });
  }
  
})();