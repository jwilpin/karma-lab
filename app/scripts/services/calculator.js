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
        return a + b;
    };
    
    this.subtract = function(a, b){
        return a - b;
    };
    
    this.multiply = function(a, b){
        return a * b;
    };
    
    this.divide = function(a, b){
        if(b == 0)
        	throw new Error("divide by 0");
        else
        	return a / b;
    };
  });
