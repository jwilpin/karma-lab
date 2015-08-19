'use strict';

describe('Service: Calculator', function () {

  // load the service's module
  beforeEach(module('karmaLabApp'));

  // instantiate service
  var Calculator;
  beforeEach(inject(function (_Calculator_) {
    Calculator = _Calculator_;
  }));

  beforeAll(function() {});

  afterAll(function() {});

  it('should calculate 1 + 2 === 3', function () {
    expect(Calculator.add).toBeDefined();
    expect(Calculator.add(1, 2)).toBe(3);
  });

  it('should calculate 1 + -1 === 0', function () {
    expect(Calculator.add).toBeDefined();
    expect(Calculator.add(1, -1)).toBe(0);
  });

  it('should String(calculate 1 - 0) == "1"', function () {
    expect(Calculator.subtract).toBeDefined();
    expect(String(Calculator.subtract(1, 0))).toEqual("1");
  });

  it('should trhow exception when divide by 0', function () {
    expect(Calculator.divide).toBeDefined();
    //pending("No se porque no esta capturando la excepcion!");
    expect(function(){Calculator.divide(1, 0)}).toThrowError("divide by 0");
  });

  it('should spy a multiply function', function () {
    expect(Calculator.multiply).toBeDefined();
    var a = 1, b = 10;
    spyOn(Calculator, 'multiply');
    Calculator.multiply(a, b);
    expect(Calculator.multiply).toHaveBeenCalled();
    expect(Calculator.multiply).toHaveBeenCalledWith(a, b);
  });

  it('should spy and callThrough a multiply function', function () {
    expect(Calculator.multiply).toBeDefined();
    var a = 1, b = 10;
    spyOn(Calculator, 'multiply').and.callThrough();
    var multiply = Calculator.multiply(a, b);
    expect(Calculator.multiply).toHaveBeenCalled();
    expect(Calculator.multiply).toHaveBeenCalledWith(a, b);
    expect(multiply).toBe(a * b);
  });

  it ("should SpyOn with returnValue, returnValues, throwError, or calls");

  it('should toBeCloseTo matcher is for precision math comparison', function () {
    expect(Calculator.divide).toBeDefined();
    var a = 1, b = 123, close = 0;
    var divide = Calculator.divide(a, b);
    expect(divide).toBeCloseTo(0.008, 3);
  });

});
