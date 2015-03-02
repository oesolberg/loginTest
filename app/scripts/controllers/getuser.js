'use strict';

/**
 * @ngdoc function
 * @name loginTestApp.controller:GetuserCtrl
 * @description
 * # GetuserCtrl
 * Controller of the loginTestApp
 */
angular.module('loginTestApp')
  .controller('GetuserCtrl', function($scope, $http, localStorageService) {

    $scope.submit = function() {



      var authData = localStorageService.get('authorizationData');
      if (authData) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + authData.token;
      }



      $http.get('http://localhost:56736/api/v1/Account/UserInfo')
        .success(function(response) {
          alert('Got some info' + response.Email + ' ' + response.HasRegistered + ' ' + response.LoginProvider);

        })
        .error(function() {
          alert('Did not work');
        })
    }

  });
