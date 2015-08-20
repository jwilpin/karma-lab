'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('karmaLabApp'));

  var ctrl, scope, calculator;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Calculator_) {
    scope = $rootScope.$new();
    calculator = _Calculator_;
    ctrl = $controller('MainCtrl', {
      $scope: scope,
      Calculator: calculator
    });
  }));

  it('should call calculator onload', function () {
     
     expect(ctrl).toBeDefined();

  });
});
