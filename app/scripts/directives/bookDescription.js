'use strict';

angular.module('frontEndApp')
  .directive('book', function () {
    return {
      template: '',
      restrict: 'EAC',
      link: function (scope, element, attrs) {
        element.html('<a href="'+scope.item.details.volumeInfo.canonicalVolumeLink+'"><img src="'+scope.item.details.volumeInfo.imageLinks.thumbnail+'"></a>')
      }
    };
  });
