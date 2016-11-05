(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  //protect against minification
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = "";
    $scope.color = "";


    $scope.updateItems = function(){
      //do nothing in case of empty/just spaced string
      if($scope.items.length == 0){
        $scope.message = "Please enter data first";
        $scope.color = "";
        return;
      }

      var itemList = [];
      itemList = $scope.items.split(",")
      //optional: filter empty elements
      //this filter function is javascript native.
      //returns a copy of input array with non-empty elements
      .filter(function(str){return str.trim().length > 0;});

      //one-line if/else assigment
      if (itemList.length > 3){
        $scope.message = "Too much!";
        $scope.color = "red";     //optional: add color to message
      }
      else {
        $scope.message = "Enjoy!";
        $scope.color = "green";   //optional: add color to message
      }
    };
  }

})();
