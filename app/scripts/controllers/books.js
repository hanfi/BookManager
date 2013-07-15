'use strict';

angular.module('frontEndApp')
  .controller('BooksCtrl', function ($scope,books) {
    $scope.books = books.get()
      $scope.removeBook= function(id){
        alert (id)
      }
  });
