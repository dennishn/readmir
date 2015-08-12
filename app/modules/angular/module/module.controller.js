(function () {
	'use strict';

	angular
		.module('angular')
		.controller('AngularModule', AngularModule);

	/* @ngInject */
	function AngularModule() {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {

		}
	}

})();
