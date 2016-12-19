(function () {
'use strict';

angular.module('data').service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  var apiBasePath = 'https://davids-restaurant.herokuapp.com';
  
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
	  return $http({
	    method: 'GET',
	    url: apiBasePath+'/categories.json'
	  });
  };
  
  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: 'GET',
      url: apiBasePath+'/menu_items.json',
      params: {category: categoryShortName}
    });
  }
  
}

})();