'use strict';

/**
 * @ngdoc function
 * @name loginTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loginTestApp
 */
angular.module('loginTestApp')
  .controller('MainCtrl', function($rootScope, $scope) {

    //$scope.$on("userLoggedInOut", function(event, args) {alert("user logged in our out");    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
