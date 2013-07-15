'use strict';

angular.module('frontEndApp')
  .controller('AddBookCtrl', function ($scope,books,$location) {
      $scope.addNewBook = function(){
        books.save({isbn:$scope.isbn},function(){
            $location.path('/')
        },function(){alert('this is not a valid isbn code')});
      }
  });
