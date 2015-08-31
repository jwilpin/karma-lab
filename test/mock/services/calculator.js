beforeEach(angular.mock.module('karmaLabApp'));
beforeEach(module(function ($provide) {
  var calculator = jasmine.createSpyObj('calculator', ['add', 'subtract', 'multiply', 'divide']);
  calculator.add.and.callFake(function() {return 1;});
  $provide.value('Calculator', calculator);
  console.log("Calculator service inyected!");
}));
