(function (){
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    //default route
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: "/",
      templateUrl: "src/home/home.template.html"
    })

    .state('categories', {
      url: "/categories",
      templateUrl: "src/categories/main-categories.template.html",
      controller: "CategoriesController as catCtrl",
      resolve: {
        categories: ["MenuDataService", function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{catId}',
      templateUrl: 'src/items/main-items.template.html',
      controller: "ItemListController as itemList",
      resolve: {
        items: ["$stateParams", "MenuDataService", function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.catId);
        }]
      }
    });
  }

})();
