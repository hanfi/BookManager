'use strict';

angular.module('frontEndApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
        .when('/addbook', {
        templateUrl: 'views/addBook.html',
        controller: 'AddBookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
