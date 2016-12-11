(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.found=[];
  menu.searchTerm="";
  menu.initialState=true;

  menu.searchMenuItems = function () {
	if(menu.searchTerm){
	    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
	    promise.then(function (response) {
	    	menu.found=response;
	    	menu.initialState=false;
	    })
	    .catch(function (error) {
	      console.log(error);
	    })
	} else {
		menu.found=[];
    	menu.initialState=false;
	}
  };
  
  menu.removeItem = function (itemIndex) {
	  menu.found.splice(itemIndex, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        var foundItems=[];
        angular.forEach(result.data.menu_items, function(item) {
        	if(~item.description.toLowerCase().indexOf(searchTerm.toLowerCase())){
        		foundItems.push(item);
        	}
        });
        return foundItems;
    });
    return response;
  };

}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
        found: '<',
        initialState: '<',
        onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var menu = this;
  
  console.log(menu.found);

  menu.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}


})();
