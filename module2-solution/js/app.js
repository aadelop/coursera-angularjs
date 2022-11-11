(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService );

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService){
       var buyList = this;        
       buyList.items = ShoppingListCheckOffService.getBuyItems();
       
       buyList.buyItem = function (itemIndnex) {
            ShoppingListCheckOffService.buyItem(itemIndnex);
       }
       
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getBoughtItems();

        boughtList.returnItem = function (itemIndex) {
            ShoppingListCheckOffService.returnItem(itemIndex);
        }

    }

    function ShoppingListCheckOffService(){
        var service = this;

        var buyItems = [
            {
                name: "Cookies",
                quantity: 10
            },
            {
                name: "Pieces of cake",
                quantity: 2
            },
            {
                name: "Glasses of milk",
                quantity: 5
            },
            {
                name: "Cups of coffee",
                quantity: 3
            },
            {
                name: "Pizzas",
                quantity: 4
            }
        ];
        var boughtItems = [];

        service.buyItem = function(itemIndex){ 
            let boughtItem = buyItems.splice(itemIndex, 1);
            boughtItems.push(boughtItem[0]);
        };

        service.returnItem = function (itemIndex) {
            let buyItem = boughtItems.splice(itemIndex, 1);
            buyItems.push(buyItem[0]);
        }

        service.getBoughtItems = function(){
            return boughtItems;
        };

        service.getBuyItems = function () {
            return buyItems;
        };
    }

}());
