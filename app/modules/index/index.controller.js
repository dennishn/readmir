(function () {
	'use strict';

	angular
		.module('index')
		.controller('Index', Index);

	/* @ngInject */
	function Index(Generators, RawGithub) {
		/*jshint validthis: true */
		var vm = this;

		vm.generators = Generators.generators;

		vm.fetchReadme = fetchReadme;
		vm.markdown = '';

		function fetchReadme() {

			var path = '/' + vm.generator.filePath;

			RawGithub.getGeneratorReadme(path).then(function(readme) {
				vm.markdown = readme;
			});

		}

	}

})();
