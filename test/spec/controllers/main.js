'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('karmaLabApp'));

  var ctrl, scope, calculator;

  // Initialize the controller and a mock scope
  beforeEach(angular.mock.inject(function ($controller, $rootScope) {
    calculator = jasmine.createSpyObj('calculator', ['add', 'subtract', 'multiply', 'divide']);
    calculator.add.and.callFake(function() {return 1;});
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {
      $scope: scope,
      Calculator: calculator
    });
  }));

  it('should call calculator onload add function', function () {
    expect(ctrl).toBeDefined();
    expect(scope.sign).toBeDefined();
    expect(scope.values).toBeDefined();
    expect(scope.result).toBeDefined();
    expect(calculator.add).toHaveBeenCalled();
    expect(scope.result).toBe(1);
  });

  it('should call multiply function', function () {
    expect(ctrl).toBeDefined();
    calculator.multiply.and.callFake(function() {return 2;});
    scope.sign = '*';
    scope.values = {first: 0, second: 1};
    scope.doCalculations();
    expect(scope.result).toBeDefined();
    expect(calculator.multiply).toHaveBeenCalledWith(scope.values.first, scope.values.second);
    expect(scope.result).toBe(2);
  });

});
