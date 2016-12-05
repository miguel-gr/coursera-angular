(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ctrl = this;
  ctrl.availableItems = ShoppingListCheckOffService.getToBuyItems();
  ctrl.buy = function (itemIndex) {
	  ShoppingListCheckOffService.buy(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var ctrl = this;
  ctrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [
	  { name: "Books", quantity: "9"},
	  { name: "Magazines", quantity: "8"},
	  { name: "Pdfs", quantity: "7"},
	  { name: "Epubs", quantity: "6"},
	  { name: "Encyclopedias", quantity: "5"},
	  { name: "Mp3", quantity: "4"}
	];

  // List of bought items
  var bought = [];

  service.addItem = function (item) {
	console.log(item);
    items.push(item);
  };

  service.buy = function (itemIndex) {
	  bought.push(toBuy[itemIndex]);
	  console.log(toBuy[itemIndex]);
	  toBuy.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };
}


})();
