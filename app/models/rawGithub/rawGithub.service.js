(function () {
	'use strict';

	angular
		.module('rawGithub')
		.service('RawGithub', RawGithub);

	/* @ngInject */
	function RawGithub($q, $http, API_ENDPOINTS) {
		/*jshint validthis: true */

		// Variables

		return {
			getGeneratorReadme: getGeneratorReadme,
			getRepositoryReadme: getRepositoryReadme
		};

		function getGeneratorReadme(path) {

			var deferred = $q.defer();

			var url = API_ENDPOINTS.root + '/' + API_ENDPOINTS.generatorFolder + '/' + path;

			$http.get(url)
				.then(function getReadmeSuccess(result) {
					console.log(result);
					deferred.resolve(result.data);
				})
				.catch(function getReadmeError(error) {
					console.log(error);
					deferred.reject(error);
				});

			return deferred.promise;

		}

		function getRepositoryReadme() {

			var deferred = $q.defer();

			var url = API_ENDPOINTS.root + '/' + 'readme.md';

			$http.get(url)
				.then(function getReadmeSuccess(result) {
					console.log(result);
					deferred.resolve(result.data);
				})
				.catch(function getReadmeError(error) {
					console.log(error);
					deferred.reject(error);
				});

			return deferred.promise;

		}
	}

})();
