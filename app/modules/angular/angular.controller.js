(function () {
	'use strict';

	angular
		.module('angular')
		.controller('Angular', Angular);

	/* @ngInject */
	function Angular($http) {
		/*jshint validthis: true */
		var vm = this;

		$http.get('https://rawgit.com/nodes-galactic/nMessages/demo-test/demo/index.html')
			.then(function(response) {
				console.log(response);
			});

		activate();

		function activate() {

		}
	}

})();
