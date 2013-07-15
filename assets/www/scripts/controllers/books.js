'use strict';

angular.module('frontEndApp')
  .controller('BooksCtrl', function ($scope,books) {
    $scope.books = books.get()
    $scope.addBtn = function(){
    	window.plugins.barcodeScanner.scan( function(result) {
            alert("We got a barcode\n" +
                      "Result: " + result.text + "\n" +
                      "Format: " + result.format + "\n" +
                      "Cancelled: " + result.cancelled);
            books.save({"isbn" : result.text },function(result){
            	alert('Book saved in database')
            	$scope.books = []
                $scope.books = books.get()
            })
        }, function(error) {
            alert("Scanning failed: " + error);
                    }
        );
    }
    $scope.removeBook= function(id){
        books.delete({'id': id},function(){
          $scope.books = books.get()
        })
      }
  });
