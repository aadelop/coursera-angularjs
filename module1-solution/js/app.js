(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.lunchDishes = "";
        $scope.lunchMessage = "";
        $scope.countDishes = function(){
            if ( $scope.lunchDishes ){
                let arrayDishes =  $scope.lunchDishes.split(',')
                if(arrayDishes.length <= 3){
                    $scope.lunchMessage = "Enjoy";
                }
                else{
                    $scope.lunchMessage = "Too much!";
                }
                
            }else{
                $scope.lunchMessage = "Please enter data first";
            }
        }
    }

}());