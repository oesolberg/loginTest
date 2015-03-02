'use strict';

angular.module('loginTestApp')
  .controller('HeaderCtrl', function($scope, authToken) {

    $scope.$on("userLoggedInOut", function(event, args) {
      //alert('Result of auth:' + $scope.isAuthenticated);
      $scope.isAuthenticated = authToken.isAuthenticated();
      $scope.menuUrl = null;
      $scope.menuUrl = "views/header.html";
    });

    $scope.isAuthenticated = authToken.isAuthenticated();

    //alert('Result of auth:' + $scope.isAuthenticated);
  });
