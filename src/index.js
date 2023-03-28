
export var doc = (function () {

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
	Constructor.prototype.button = function (buttonName) {
		this.each(function (item) {
			item.buttonList.add(buttonName)
		});
	};
	Constructor.prototype.each = function (callback) {
		if (!callback || typeof callback !== 'function') return;
		for (var i = 0; i < this.elems.length; i++) {
			callback(this.elems[i], i);
		}
	};

	/**
	 * Return the constructor
	 */
	return Constructor;

})();



