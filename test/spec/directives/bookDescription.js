'use strict';

describe('Directive: bookDescription', function () {
  beforeEach(module('frontEndApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<book-description></book-description>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the bookDescription directive');
  }));
});
