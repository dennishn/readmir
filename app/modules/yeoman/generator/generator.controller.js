(function () {
	'use strict';

	angular
		.module('yeoman')
		.controller('YeomanGenerator', Generator);

	/* @ngInject */
	function Generator($filter, Generators, $stateParams, RawGithub) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {
			_fetchReadme();
		}

		function _fetchReadme() {
			var readmePath = $filter('slugtoreadme')($stateParams.slug, Generators.generators);

			RawGithub.getGeneratorReadme(readmePath)
				.then(function resolveReadme(result) {
					vm.readme = result;
				});
		}
	}

})();
