'use strict';

/**
 * @ngdoc service
 * @name karmaLabApp.Calculator
 * @description
 * # Calculator
 * Service in the karmaLabApp.
 */
angular.module('karmaLabApp')
  .service('Calculator', function () {
    this.add = function(a, b){
        console.log("CalculatorService.add has been called");
        return a + b;
    };
    
    this.subtract = function(a, b){
        console.log("CalculatorService.subtract has been called");
        return a - b;
    };
    
    this.multiply = function(a, b){
        console.log("CalculatorService.multiply has been called");
        return a * b;
    };
    
    this.divide = function(a, b){
        console.log("CalculatorService.divide has been called");
        if(b == 0)
        	throw new Error("divide by 0");
        else
        	return a / b;
    };

    console.log("CalculatorService loaded!");
  });
