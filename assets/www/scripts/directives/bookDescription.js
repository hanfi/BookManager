'use strict';

angular.module('frontEndApp')
  .directive('book', function () {
    return {
      template: '',
      restrict: 'EAC',
      link: function (scope, element, attrs) {
        element.html('<img src="'+scope.item.details.volumeInfo.imageLinks.thumbnail+'">')
      }
    };
  });
