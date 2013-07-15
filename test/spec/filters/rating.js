'use strict';

describe('Filter: rating', function () {

  // load the filter's module
  beforeEach(module('frontEndApp'));

  // initialize a new instance of the filter before each test
  var rating;
  beforeEach(inject(function ($filter) {
    rating = $filter('rating');
  }));

  it('should return the input prefixed with "rating filter:"', function () {
    var text = 'angularjs';
    expect(rating(text)).toBe('rating filter: ' + text);
  });

});
