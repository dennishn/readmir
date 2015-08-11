(function () {
	'use strict';

	angular
		.module('yeoman')
		.controller('YeomanGenerators', Generators);

	/* @ngInject */
	function Generators(Generators) {
		/*jshint validthis: true */
		var vm = this;

		vm.generatorList = Generators.generators;

	}

})();
