// (function (){
//   'use strict';
//
//   //declare controllers and service
//   angular.module('ShoppingListCheckOff', [])
//   .controller('ToBuyController', ToBuyController)
//   .controller('AlreadyBoughtController', AlreadyBoughtController).
//   service('ShoppingListCheckOffService', ShoppingListCheckOffService);
//
//   //ToBuyController have one variable and one function
//   ToBuyController.$inject = ['ShoppingListCheckOffService'];
//   function ToBuyController(ShoppingListCheckOffService){
//     var toBuy = this;
//     toBuy.items = ShoppingListCheckOffService.getToBuyItems();
//
//     toBuy.buyProduct = function(index){
//       ShoppingListCheckOffService.buyProduct(index);
//     };
//   }
//
//   //AlreadyBoughtController have one variable and one function
//   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//   function AlreadyBoughtController(ShoppingListCheckOffService){
//     var bought = this;
//     bought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
//   }
//
//   //service definition
//   function ShoppingListCheckOffService(){
//     var service = this;
//     //-- service data
//     service.toBuyItems = [{name:'cookies', quantity: 12},
//     {name:'apples', quantity: 6},
//     {name:'oranges', quantity: 10},
//     {name:'hamburguers', quantity: 4},
//     {name:'bread', quantity: 2}];
//     service.alreadyBoughtItems = [];
//
//     //-- service methods
//     service.getToBuyItems = function(){
//       return service.toBuyItems;
//     };
//
//     //confirm purchase: remove from toBuy list and add to alreadyBought
//     service.buyProduct = function(index){
//       var bought = service.toBuyItems.splice(index, 1);
//       service.alreadyBoughtItems.push(bought[0]); //splice returns array
//     };
//
//     service.getAlreadyBoughtItems = function(){
//       return service.alreadyBoughtItems;
//     };
//   }
//
// })();


!function(){"use strict";function t(t){var e=this;e.items=t.getToBuyItems(),e.buyProduct=function(e){t.buyProduct(e)}}function e(t){var e=this;e.items=t.getAlreadyBoughtItems()}function n(){var t=this;t.toBuyItems=[{name:"cookies",quantity:12},{name:"apples",quantity:6},{name:"oranges",quantity:10},{name:"hamburguers",quantity:4},{name:"bread",quantity:2}],t.alreadyBoughtItems=[],t.getToBuyItems=function(){return t.toBuyItems},t.buyProduct=function(e){var n=t.toBuyItems.splice(e,1);t.alreadyBoughtItems.push(n[0])},t.getAlreadyBoughtItems=function(){return t.alreadyBoughtItems}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",n),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
