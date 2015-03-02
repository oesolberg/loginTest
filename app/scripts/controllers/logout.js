'use strict';


angular.module('loginTestApp')
  .controller('LogoutCtrl', function($rootScope, $scope, authToken, $state) {
    //alert('should go to logout');
    authToken.deleteToken();
    $rootScope.$broadcast('userLoggedInOut', {
      //user: user
    });

    $scope.isAuthenticated = authToken.isAuthenticated();
    $state.go('login');

  });
