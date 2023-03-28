
var $ = (function () {

	'use strict';

	/**
	 * Create the constructor
	 * @param {String} selector The selector to use
	 */
	var Constructor = function (selector) {
		if (selector === 'document') {
			this.elems = [document];
		} else if (selector === 'window') {
			this.elems = [window];
		} else {
			this.elems = document.querySelectorAll(selector);
		}
	};

	/**
	 * Return the constructor
	 */
	return Constructor;

})();
