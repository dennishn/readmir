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
		.module('readmir')
		.run(run);

	function run(nTranslate, $state, $rootScope, $localStorage) {
		var didRunTranslate = false;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

			if(!didRunTranslate) {


				if(!$localStorage.translate) {
					event.preventDefault();
					nTranslate.init().then(function() {
						$state.go(toState.name, toParams);
					});
				} else {
					event.preventDefault();
					nTranslate.init().then(function() {
						$state.go(toState.name, toParams);
					});
				}

				didRunTranslate = true;
			}
		});
	}
})();
