(function () {
"use strict";

angular.module('private').controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
	var $ctrl = this;
	$ctrl.userData = MyInfoService.getUserData();
}

})();
