'use strict';

describe('Service: suppliersService', function () {

  // load the service's module
  beforeEach(module('angularProjApp'));

  // instantiate service
  var suppliersService;
  beforeEach(inject(function (_suppliersService_) {
    suppliersService = _suppliersService_;
  }));

  it('should do something', function () {
    expect(!!suppliersService).toBe(true);
  });

});
