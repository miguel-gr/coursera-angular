(function () {
'use strict';

angular.module('MenuApp').controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['cats'];
function CategoriesController(cats) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = cats;
}

})();
