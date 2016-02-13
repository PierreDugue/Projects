'use strict';

describe('Service: serviceTracker', function () {

  // load the service's module
  beforeEach(module('d3TrackerApp'));

  // instantiate service
  var serviceTracker;
  beforeEach(inject(function (_serviceTracker_) {
    serviceTracker = _serviceTracker_;
  }));

  it('should do something', function () {
    expect(!!serviceTracker).toBe(true);
  });

});
