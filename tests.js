/* License: MIT.
 * Copyright (C) 2014, Uri Shaked and contributors.
 */

'use strict';

describe('service: Promise', function () {
	var Promise;

	beforeEach(module('angular-es6-promises'));

	beforeEach(inject(function(_Promise_) {
		Promise = _Promise_;
	}));

	it('should have a then method', function() {
		expect(new Promise(angular.identity).then).toBeDefined();
	});

	// TODO test coverage
});
