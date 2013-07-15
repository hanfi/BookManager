'use strict';

angular.module('frontEndApp')
  .filter('rating', function () {
    return function (input) {
      var result= "";
      for (var i=0; i<Math.floor(input); i++){
        result+="<span class='icon-star'></span>"
      }
      if(i<input){
        result+="<span class='icon-star-half'></span>"
      }
      return result;
    };
  });
