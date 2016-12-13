(function (){
  'use strict';

  //item component
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/items/items.template.html',
    bindings: {
      list: '<'
    }
  });

})();
