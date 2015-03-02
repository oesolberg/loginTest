'use strict';

angular.module('loginTestApp', ['ui.router', 'LocalStorageModule'])
  .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');


    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html'

      })
      .state('about', {
        url: '/about',
        templateUrl: '/views/about.html',
        controller: 'GetuserCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: '/views/register.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
      })
      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl',
        onExit: function() {
          //alert("user logged in our out");
        }
      });
  })
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('LUB');
    // localStorageServiceProvider.setStorageCookieDomain('example.com');
    // localStorageServiceProvider.setStorageType('sessionStorage');
  }])
