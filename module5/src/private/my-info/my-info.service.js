(function () {
"use strict";

angular.module('private').service('MyInfoService', MyInfoService);


function MyInfoService() {
  var service = this;
  service.userData = null;

  service.getUserData = function () {
	  return service.userData;
  };

  service.setUserData = function (userData) {
	  service.userData=userData;
  };

}



})();
