(function () {
	'use strict';

	angular
		.module('angular')
		.controller('Angular', Angular);

	/* @ngInject */
	function Angular($http) {
		/*jshint validthis: true */
		var vm = this;

		$http.get('common/htmlViewer/test.html')
			.then(function(response) {
				console.log(response);
				vm.html = response.data;
			});

		activate();

		function activate() {

		}
	}

})();
