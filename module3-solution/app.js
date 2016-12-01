// (function (){
//   'use strict';
//
//   //declare controllers and service
//   angular.module('NarrowItDownApp', [])
//   .controller('NarrowItDownController', NarrowItDownController)
//   .directive('foundItems', foundItemsDirective)
//   .service('MenuSearchService', MenuSearchService);
//
//   //ToBuyController have one variable and one function
//   NarrowItDownController.$inject = ['MenuSearchService'];
//   function NarrowItDownController(MenuSearchService){
//     var narrow = this;
//
//     //--variables
//     narrow.init = true;
//     narrow.found = [];
//     narrow.searchItem = "";
//
//     //--functions
//     narrow.search = function (){
//       if (narrow.searchItem == ""){
//         narrow.init = false;
//         return;
//       }
//
//       var promise = MenuSearchService.getMatchedMenuItems(narrow.searchItem);
//       promise.then(function (response) {
//         narrow.init = false;
//         // process result and only keep items that match
//         narrow.found = response.data.menu_items.filter(function(item){
//           //ignore case: convert both strings to upper-case
//           return item.description.toUpperCase().indexOf(narrow.searchItem.toUpperCase()) != -1;
//         });
//       });
//     }
//
//     narrow.dontWant = function(index){
//       narrow.found.splice(index, 1);
//     }
//   }
//
//   //service definition
//   MenuSearchService.$inject = ['$http'];
//   function MenuSearchService($http){
//     var service = this;
//
//     //-- service methods
//     service.getMatchedMenuItems = function(searchItem){
//       return $http({
//         method: 'GET',
//         url: "https://davids-restaurant.herokuapp.com/menu_items.json"
//       });
//     };
//   }
//
//   //Directive configuration
//   function foundItemsDirective(){
//     return {
//       templateUrl: 'foundItems.html',
//       scope: {
//         found: '<',
//         remove: '&'
//       }
//     };
//   }
//
// })();

(function(){'use strict';angular.module('NarrowItDownApp',[]).controller('NarrowItDownController',NarrowItDownController).directive('foundItems',foundItemsDirective).service('MenuSearchService',MenuSearchService);NarrowItDownController.$inject=['MenuSearchService'];function NarrowItDownController(MenuSearchService){var narrow=this;narrow.init=true;narrow.found=[];narrow.searchItem="";narrow.search=function(){if(narrow.searchItem==""){narrow.init=false;return}var promise=MenuSearchService.getMatchedMenuItems(narrow.searchItem);promise.then(function(response){narrow.init=false;narrow.found=response.data.menu_items.filter(function(item){return item.description.toUpperCase().indexOf(narrow.searchItem.toUpperCase())!=-1})})};narrow.dontWant=function(index){narrow.found.splice(index,1)}}MenuSearchService.$inject=['$http'];function MenuSearchService($http){var service=this;service.getMatchedMenuItems=function(searchItem){return $http({method:'GET',url:"https://davids-restaurant.herokuapp.com/menu_items.json"})}}function foundItemsDirective(){return{templateUrl:'foundItems.html',scope:{found:'<',remove:'&'}}}})();
