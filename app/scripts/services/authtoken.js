'use strict';

angular.module('loginTestApp').factory('authToken', function(localStorageService) {

  var storage = localStorage
  var storageName = 'authorizationData';
  var chachedToken;
  // Public API here
  var authToken = {
    setToken: function(dataWithToken) {
      chachedToken = dataWithToken;
      localStorageService.set(storageName, {
        token: dataWithToken.access_token,
        userName: 'detteerentest',
        roles: dataWithToken.role,
        refreshToken: "",
        useRefreshTokens: false
      });

    },

    getToken: function() {
      if (!chachedToken) {
        chachedToken = localStorageService.get(storageName);
      }
      return chachedToken;

    },
    deleteToken: function() {
      localStorageService.clearAll(storageName);
      chachedToken = null;
      return chachedToken;

    },
    isAuthenticated: function() {
      return !!authToken.getToken();
    }
  };
  return authToken;
});
