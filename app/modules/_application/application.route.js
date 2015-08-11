(function() {
	'use strict';

	angular.module('application')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Application = {
				name: 'application',
				abstract: true,
				data: {
					breadcrumbProxy: 'application.index'
				},
				views: {
					'root': {
						templateUrl: 'modules/_application/application.template.html',
						controller: 'Application',
						controllerAs: 'application'
					},
					'navigation@application': {
						templateUrl: 'modules/_application/navigation/navigation.template.html',
						controller: 'Navigation',
						controllerAs: 'navigation'
					}
				}
			};

			$stateProvider.state(Application);
		});
})();
