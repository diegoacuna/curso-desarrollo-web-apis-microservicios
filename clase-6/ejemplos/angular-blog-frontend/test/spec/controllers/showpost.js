'use strict';

describe('Controller: ShowpostCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBlogApp'));

  var ShowpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowpostCtrl = $controller('ShowpostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShowpostCtrl.awesomeThings.length).toBe(3);
  });
});
