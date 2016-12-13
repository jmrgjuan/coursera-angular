(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemListController', ItemListController);

  ItemListController.$inject = ['$stateParams', 'items'];
  function ItemListController($stateParams, items) {
    var ctrl = this;
    console.log("Items received", items.data);
    ctrl.items = items.data;
    /*var item = items[$stateParams.itemId];
    itemDetail.name = item.name;
    itemDetail.quantity = item.quantity;
    itemDetail.description = item.description;*/
  }

})();
