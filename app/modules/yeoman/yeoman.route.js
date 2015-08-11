(function() {
	'use strict';

	angular.module('yeoman')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Yeoman = {
				name: 'application.yeoman',
				url: '/generators',
				abstract: true,
				data: {
					breadcrumbProxy: 'application.yeoman.generators'
				},
				views: {
					'application@application': {
						templateUrl: 'modules/yeoman/yeoman.template.html',
						controller: 'Yeoman',
						controllerAs: 'yeoman'
					},
					'header@application': {
						templateUrl: 'modules/yeoman/header/header.template.html'
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
				data: {
					displayName: 'Yeoman'
				},
				resolve: {
					readme: function(RawGithub) {
						return RawGithub.getRepositoryReadme()
							.then(function resolveReadme(result) {
								return result;
							});
					}
				}
			};


			var Generator = {
				name: 'application.yeoman.generator',
				url: '/:slug',
				data: {
					displayName: 'nodes:{{slug}}'
				},
				views: {
					'content': {
						controller: 'YeomanGenerator',
						controllerAs: 'generator',
						templateUrl: 'modules/yeoman/generator/generator.template.html'
					}
				},
				resolve: {
					slug: function($stateParams) {
						return $stateParams.slug;
					}
				}
			};

			$stateProvider.state(Yeoman);
			$stateProvider.state(Generators);
			$stateProvider.state(Generator);
		});
})();
