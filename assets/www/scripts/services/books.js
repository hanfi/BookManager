'use strict';

angular.module('frontEndApp')
  .factory('books', function ($resource) {
      return $resource('http://192.168.1.4/api/v1/books/:id')
  });
