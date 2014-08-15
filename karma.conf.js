/* License: MIT.
 * Copyright (C) 2014, Uri Shaked and contributors.
 */

'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		autoWatch: true,
		reporters: ['dots', 'coverage'],
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'angular-es6-promises.js',
			'tests.js'
		],
		preprocessors: {
			'angular-es6-promises.js': 'coverage'
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		}
	});
};
