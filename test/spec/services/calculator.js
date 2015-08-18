'use strict';

describe('Service: Calculator', function () {

  // load the service's module
  beforeEach(module('karmaLabApp'));

  // instantiate service
  var Calculator;
  beforeEach(inject(function (_Calculator_) {
    Calculator = _Calculator_;
  }));

  it('should do something', function () {
    expect(!!Calculator).toBe(true);
  });

});
