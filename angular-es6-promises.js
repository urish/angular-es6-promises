/**
 * angular-es6-promises version 0.1.0
 * License: MIT.
 * Copyright (C) 2014, Uri Shaked and contributors.
 */

(function (root) {
	'use strict';

	function factory(angular) {

		angular
			.module('angular-es6-promises', [])

			.factory('Promise', ['$q', function ($q) {

				function Promise(executor) {
					var deferred = $q.defer();

					try {
						executor.call(undefined,
							angular.bind(deferred, deferred.resolve),
							angular.bind(deferred, deferred.reject));
					} catch (err) {
						deferred.reject(err);
					}

					return deferred.promise;
				}

				return Promise;
			}]);
	}

	if (typeof define === 'function' && define.amd) {
		/* AMD module */
		define(['angular'], factory);
	} else {
		/* Browser global */
		factory(root.angular);
	}
}(window));
