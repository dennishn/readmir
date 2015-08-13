(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name readmir
	 * @description
	 * # readmir
	 *
	 * Main module of the application.
	 */
	angular
		.module('readmir', [
			'DEBUG_ENV',
			'API_ENDPOINTS',
			'nCore',
			'ui.router',
			'config',
			'angular-loading-bar',
			'cgBusy',
			'angulartics',
			'angulartics.google.analytics',
			'mm.foundation',
			'ngAnimate',
			'ngSanitize',
			'application',
			'index',
			'btford.markdown',
			'rawGithub',
			'generators',
			'yeoman',
			'slugToReadme',
			'markdownViewer',
			'mainNavigationElement',
			'angularUtils.directives.uiBreadcrumbs',
			'angular',
			'htmlViewer',
			'oc.lazyLoad',
			/* ---> Do not delete this comment (ngImports) <--- */
	]);
})();