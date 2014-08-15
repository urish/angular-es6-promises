/* License: MIT.
 * Copyright (C) 2014 Uri Shaked and contributors.
 */

'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'angular-es6-promises.js',
				'tests.js',
				'karma.conf.js'
			]
		},
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'angular-es6-promises.min.js': 'angular-es6-promises.js'
				}
			}
		}
	});

	grunt.registerTask('test', [
		'jshint',
		'karma'
	]);

	grunt.registerTask('build', [
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
