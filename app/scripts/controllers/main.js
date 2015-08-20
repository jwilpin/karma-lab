'use strict';

angular.module('karmaLabApp')
.controller('MainCtrl', function ($scope, Calculator) {
 	$scope.values = {
        first: 0,
        second: 0
    };
    $scope.sign = '+';
    
    $scope.doCalculations = function(){
        switch($scope.sign){
            case '+': $scope.result = Calculator.add($scope.values.first, $scope.values.second); break;
            case '-': $scope.result = Calculator.subtract($scope.values.first, $scope.values.second); break;
            case '*': $scope.result = Calculator.multiply($scope.values.first, $scope.values.second); break;
            case '/': $scope.result = Calculator.divide($scope.values.first, $scope.values.second); break;
        }
    };

    $scope.doCalculations();

  });
