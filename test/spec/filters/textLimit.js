'use strict';

describe('Filter: textLimit', function () {

  // load the filter's module
  beforeEach(module('frontEndApp'));

  // initialize a new instance of the filter before each test
  var textLimit;
  beforeEach(inject(function ($filter) {
    textLimit = $filter('textLimit');
  }));

  it('should return the input prefixed with "textLimit filter:"', function () {
    var text = 'angularjs';
    expect(textLimit(text)).toBe('textLimit filter: ' + text);
  });

});
