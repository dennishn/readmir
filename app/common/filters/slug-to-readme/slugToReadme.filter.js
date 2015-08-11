(function() {
	'use strict';

	angular
		.module('slugToReadme')
		.filter('slugtoreadme', SlugToReadme);

	/* @ngInject */

	function SlugToReadme() {

		/**
		 * Searches an array for a slug key with the same value as
		 * the needle.
		 *
		 * @author Dennis Haulund Nielsen
		 *
		 * @param needle {string}
		 * @param haystack {array}
		 * @returns object or undefined {*}
		 */
		return function(needle, haystack) {

			var i = 0,
				len = haystack.length;

			var result;

			for(; i < len; i++) {
				if(haystack[i].slug === needle) {
					result = haystack[i].filePath;
				}
			}

			return result;

		};
	}
})();
