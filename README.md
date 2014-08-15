# angular-es6-promises

ECMAScript 6 promises for Angular.JS.

Copyright (C) 2014, Uri Shaked <uri@urish.org>.

[![Build Status](https://travis-ci.org/urish/angular-es6-promises.png?branch=master)](https://travis-ci.org/urish/angular-es6-promises)
[![Coverage Status](https://coveralls.io/repos/urish/angular-es6-promises/badge.png)](https://coveralls.io/r/urish/angular-es6-promises)

## Usage

Include `angular-es6-promises.js` in your application.

```html
<script src="bower_components/angular-es6-promises/angular-es6-promises.js"></script>
```

Add the `angular-es6-promises` module as a dependency to your app:

```js
var myapp = angular.module('myapp', ['angular-es6-promises']);
```

Inject the `Promise` factory anywhere you need to create a new promise, then
call the `Promise` constructor with an executor function, as shown below:

```js
myApp.service('someService', function(Promise) {
	this.doSomethingAsync = function() {
		return new Promise(
			function(resolve, reject) {
				someAsyncFunction(function(result) {
					if (result) {
						resolve(result);
					} else {
						reject(new Error('ASync function did not return a result'));
					}
				});
			}
		);
	}
});
```

## License

Released under the terms of MIT License.
