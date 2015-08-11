(function() {
	'use strict';

	angular
		.module('markdownViewer')
	  	.directive('markdownViewer', MarkdownViewer);

	/* @ngInject */
	function MarkdownViewer() {
		var directive = {
			templateUrl: 'common/markdownViewer/markdownviewer.template.html',
			link: link,
			restrict: 'EA',
			controller: controller,
			controllerAs: 'markdownViewer',
			bindToController: true,
			scope: {
				markdown: '='
			}
		};

		return directive;

		function link(scope, element, attrs){
		}

		function controller($scope) {
			var vm = this;

			vm.markdownLoading = true;

			$scope.$watch(function() {
				return vm.markdown;
			}, function(markdown) {
				if(markdown) {
					vm.markdownLoading = false;
				}
			});

		}
	}
})();
