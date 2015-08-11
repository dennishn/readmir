(function() {
	'use strict';

	angular.module('yeoman')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Yeoman = {
				name: 'application.yeoman',
				url: '/generators',
				abstract: true,
				views: {
					'application@application': {
						templateUrl: 'modules/yeoman/yeoman.template.html',
						controller: 'Yeoman',
						controllerAs: 'yeoman'
					}
				}
			};

			var Generators = {
				name: 'application.yeoman.generators',
				url: '/',
				views: {
					'content': {
						templateUrl: 'modules/yeoman/generators/generators.template.html',
						controller: 'YeomanGenerators',
						controllerAs: 'generators'
					}
				},
				resolve: {
					readme: function(RawGithub) {
						return RawGithub.getRepositoryReadme()
							.then(function resolveReadme(result) {
								return result;
							})
					}
				}
			};


			var Generator = {
				name: 'application.yeoman.generator',
				url: '/:slug',
				views: {
					'content': {
						templateUrl: 'modules/yeoman/generator/generator.template.html',
						controller: 'YeomanGenerator',
						controllerAs: 'generator'
					}
				},
				resolve: {
					generator: function($stateParams, Generators, $filter, RawGithub) {

						var readmePath = $filter('slugtoreadme')($stateParams.slug, Generators.generators);

						return RawGithub.getGeneratorReadme(readmePath)
							.then(function resolveReadme(result) {
								return result;
							});

					}
				}
			};

			$stateProvider.state(Yeoman);
			$stateProvider.state(Generators);
			$stateProvider.state(Generator);
		});
})();
