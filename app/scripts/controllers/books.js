'use strict';

angular.module('frontEndApp')
  .controller('BooksCtrl', function ($scope,books) {
    $scope.books = books.get()
      $scope.removeBook= function(id){
        books.delete({'id': id},function(){
          $scope.books = books.get()
        })
      }
  });
