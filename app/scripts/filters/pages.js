'use strict';

angular.module('frontEndApp')
  .filter('pages', function () {
    return function (input) {
      return input + ' pages';
    };
  });
