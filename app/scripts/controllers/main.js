'use strict';

angular.module('karmaLabApp')
.controller('MainCtrl', function ($scope, Calculator) {
 	$scope.values = {
        first: 0,
        second: 0
    };
    $scope.sign = '+';
    $scope.result = 0;
    
    $scope.doCalculations = function(sign, a, b){
        switch(sign){
            case '+': $scope.result = Calculator.add(a, b); break;
            case '-': $scope.result = Calculator.subtract(a, b); break;
            case '*': $scope.result = Calculator.multiply(a, b); break;
            case '/': $scope.result = Calculator.divide(a, b); break;
        }
    };
  });
