'use strict';

describe('Directive: title', function () {
  beforeEach(module('frontEndApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<title></title>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the title directive');
  }));
});
