'use strict';

angular.module('frontEndApp')
  .factory('books', function ($resource) {
      return $resource('http://172.16.10.109/api/v1/books',
          {get: {method: 'GET'}})
  });
