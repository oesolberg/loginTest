'use strict';

describe('Controller: GetuserCtrl', function () {

  // load the controller's module
  beforeEach(module('loginTestApp'));

  var GetuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetuserCtrl = $controller('GetuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
