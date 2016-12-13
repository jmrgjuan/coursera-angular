(function (){
  'use strict';

  //implement MenuDataService service
  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('CATEGORIES_URL', 'https://davids-restaurant.herokuapp.com/categories.json')
    .constant('ITEMS_URL', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

    MenuDataService.$inject = ['$http', 'CATEGORIES_URL', 'ITEMS_URL'];
    function MenuDataService($http, CATEGORIES_URL, ITEMS_URL){
      var service = this;

      //-- service methods
      service.getAllCategories = function(){
        return $http({
          method: 'GET',
          url: CATEGORIES_URL
        });
      };

      service.getItemsForCategory = function(categoryShortName){
        return $http({
          method: 'GET',
          url: (ITEMS_URL + categoryShortName)
        });
      };
    }
})();
