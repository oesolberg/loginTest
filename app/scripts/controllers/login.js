'use strict';

angular.module('loginTestApp')
  .controller('LoginCtrl', function($rootScope,
    $scope, $http, $state, localStorageService, authToken) {

    $scope.getInfo = function() {



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


    $scope.submit = function() {

      //alert($scope.email);
      //var url = 'http://localhost:8888/LubLoggerWebApi/Token';
      var url = 'http://localhost:8888/LubLoggerWebApi/Token';
      var tokenRequest = "grant_type=password&username=odd.erik.solberg@webstep.no&password=Test123"; //"grant_type=password&username=jalla%40jalla.no&password=Test123";

      var req = {
        method: 'POST',
        url: 'http://localhost:56736/token',

        data: {
          test: 'grant_type=password&username=odd.erik.solberg@webstep.no&password=Test123'
        },
      }

      //var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;
      var data = "grant_type=password&username=" + 'odd.erik.solberg@webstep.no' + "&password=" + 'Test123';

      //$http(req)
      var url = 'http://localhost:56736/token';
      //var url = 'http://localhost:8888/LubLoggerWebApi/Token';
      //var url = 'http://localhost/LubLoggerWebApi/Token';

      $http.post(url, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .success(function(data, status, headers, config, statusText) {
          //alert('Success! ' + status + '\n' + data.access_token + '\n' + data.userName + '\n' + data.name + '\n' + data.role);
          authToken.setToken(data);
          $rootScope.$broadcast('userLoggedInOut', {
            //user: user
          });
          $state.go('main');
          //localStorageService.set('authorizationData', {            token: data.access_token,            userName: 'detteerentest',            refreshToken: "",            useRefreshTokens: false          });

        })
        .error(function(data, status, headers, config, statusText) {
          //alert('No dice ' + status + data + headers + config + statusText);
          alert('Error ' + status);
        });



      /*var _logOut = function() {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";
        _authentication.useRefreshTokens = false;

      };

      var _fillAuthData = function() {

        var authData = localStorageService.get('authorizationData');
        if (authData) {
          _authentication.isAuth = true;
          _authentication.userName = authData.userName;
          _authentication.useRefreshTokens = authData.useRefreshTokens;
        }

      };
      */
    }
  });
