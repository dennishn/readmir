(function() {
	'use strict';

	angular.module('angular')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Angular = {
				name: 'application.angular',
				url: '/angular',
				abstract: true,
				data: {
					breadcrumbProxy: 'application.angular.modules'
				},
				views: {
					'application@application': {
						templateUrl: 'modules/angular/angular.template.html',
						controller: 'Angular',
						controllerAs: 'angular'
					},
					'header@application': {
						templateUrl: 'modules/yeoman/header/header.template.html'
					}
				}
			};

			var Modules = {
				name: 'application.angular.modules',
				url: '/:slug',
				views: {
					'content': {
						templateUrl: 'modules/angular/modules/modules.template.html',
						controller: 'AngularModules',
						controllerAs: 'modules'
					}
				},
				data: {
					displayName: 'Angular'
				}
			};

			var Module = {
				name: 'application.angular.module',
				url: '/:slug',
				data: {
					displayName: 'nAnuglar-{{slug}}'
				},
				views: {
					'content': {
						templateUrl: 'modules/angular/module/module.template.html',
						controller: 'AngularModule',
						controllerAs: 'module'
					}
				},
				resolve: {
					slug: function($stateParams) {
						console.log('jaerh')
						return $stateParams.slug;
					}
				}
			};

			$stateProvider.state(Angular);
			$stateProvider.state(Modules);
			$stateProvider.state(Module);
		});
})();
