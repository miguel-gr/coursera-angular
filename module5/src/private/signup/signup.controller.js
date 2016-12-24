(function () {
"use strict";

angular.module('private').controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'MyInfoService'];
function SignUpController(MenuService, MyInfoService) {
	var N_A = 'n/a';
	var $ctrl = this;
	$ctrl.foundItem = {};
	$ctrl.ok = false;

	$ctrl.validateItem = function () {
		$ctrl.foundItem.name=N_A;
		$ctrl.ok = false;
	    var promise = MenuService.getMenuItem($ctrl.user.dishid);
	    promise.then(function (response) {
    		$ctrl.foundItem.name=response.name;
    		$ctrl.ok = true;
    		// User data
    		$ctrl.user.dishName=response.name;
    		if (!response.description || 0 === response.description.length){
    			$ctrl.user.dishDescription='There is no description yet for this delicious dish';
    		} else {
    			$ctrl.user.dishDescription=response.description;    			
    		}
    		$ctrl.user.dishImageCode=getImageCode(response.short_name);
    		console.log($ctrl.user.dishImageCode);
    		MyInfoService.setUserData($ctrl.user);
	    })
	    .catch(function (error) {
			$ctrl.foundItem.name=N_A;
	        console.log(error);
	    })
	};

	function getImageCode(shortName){
		return shortName.replace(/[^A-Z]+/g, '');
	}

}

})();
