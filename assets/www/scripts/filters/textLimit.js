'use strict';

angular.module('frontEndApp')
  .filter('textLimit', function () {
    return function (input) {
      if (input.length<=300)
      {
        return input
      }
      else
      {
        return input.substring(0,input.substring(0,300).lastIndexOf(" "))+ " ...";
      }
    };
  });
