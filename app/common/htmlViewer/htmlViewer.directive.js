(function() {
	'use strict';

	angular
		.module('htmlViewer')
		.filter('unsafe', ['$sce', function($sce) {
			return function(val) {
				return $sce.trustAsHtml(val);
			};
		}])
		.directive('shadowDom', shadowDom)
	  	.directive('dynamicCompile', HtmlViewer);

	/* @ngInject */
	function HtmlViewer($compile, $parse, $window) {
		var directive = {
			link: link
		};

		return directive;

		function link(scope, element, attrs){
			var parsed = $parse(attrs.ngBindHtml);
			function getStringValue() { return (parsed(scope) || '').toString(); }
			// Recompile if the template changes
			scope.$watch(getStringValue, function() {
				console.log('stuff', element);
				$compile(element, null, 0)(scope);
				// Emit an event that an element is rendered
				element.ready(function() {
					var event = new CustomEvent('styleguide:onRendered', {
						detail: {
							elements: element
						},
						bubbles: true,
						cancelable: true
					});
					$window.dispatchEvent(event);
				});
			});
		}
	}

	/* @ngInject */
	function shadowDom($templateCache) {

		var USER_STYLES_TEMPLATE = 'userStyles.html';

		var directive = {
			restrict: 'E',
			transclude: true,
			link: link
		};

		return directive;

		function link(scope, element, attrs, controller, transclude) {
			angular.element(element[0]).empty();
			var root = angular.element(element[0].createShadowRoot());
			root.append($templateCache.get(USER_STYLES_TEMPLATE));
			transclude(function(clone) {
				console.log(clone);
				root.append(clone);
			});
		}

	}
})();
