(function() {
'use strict';

angular.module('private').config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('private', {
    	abstract: true,
        templateUrl: 'src/private/private.html'
    })
    .state('private.my-info', {
        url: '/my-info',
        templateUrl: 'src/private/my-info/my-info.html',
        controller: 'MyInfoController',
        controllerAs: 'infoCtrl'
    })
    .state('private.signup', {
        url: '/signup',
        templateUrl: 'src/private/signup/signup.html',
        controller: 'SignUpController',
        controllerAs: 'signUpCtrl'
    });
}
})();
