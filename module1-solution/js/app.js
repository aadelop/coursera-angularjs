(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.lunchDishes = "";
        $scope.lunchMessage = "";
        $scope.colorMessage = "";
        $scope.styleMessage = "";
        $scope.borderSolid = "none";
        $scope.countDishes = function(){
            if ( $scope.lunchDishes ){
                let arrayDishes =  $scope.lunchDishes.split(',')
                $scope.lunchMessage =  arrayDishes.length <= 3 ? "Enjoy" : "Too much!";
                $scope.colorMessage = "green";
            }else{
                $scope.lunchMessage = "Please enter data first";
                $scope.colorMessage = "red";
            }
            $scope.borderSolid = "solid"
        }
    }

}());