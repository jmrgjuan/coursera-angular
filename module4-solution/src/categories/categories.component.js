(function (){
  'use strict';

  //categories component
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/categories/categories.template.html',
    bindings: {
      items: '<'
    }
  });

})();
