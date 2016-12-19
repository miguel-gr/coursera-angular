(function () {
'use strict';

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categComp.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
    	cats: ['MenuDataService', function(MenuDataService) {
	        return MenuDataService.getAllCategories().then(function(response) {
	          return response.data;
	        });
	    }]
    }
  })

  .state('items', {
    url: '/items/{category}',
    templateUrl: 'templates/itemsComp.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
        return MenuDataService.getItemsForCategory($stateParams.category).then(function(response){
          return response.data.menu_items;
        });
      }]
    }
  });

}

})();
