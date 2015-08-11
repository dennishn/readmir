(function() {
	'use strict';

	angular
		.module('mainNavigationElement')
	  	.directive('mainNavigationElement', MainNavigationElement);

	/* @ngInject */
	function MainNavigationElement($state) {
		var directive = {
			link: link,
			restrict: 'EA'
		};

		return directive;

		function link(scope, element, attrs){

			var activeWhen = attrs.mainNavigationElement;

			scope.$watch(function() {
				return $state.current.name.split('.')[1];
			}, function(newState) {
				if(newState === activeWhen) {
					_setActive();
				} else {
					_removeActive();
				}
			});

			function _setActive() {
				element.addClass('active');
			}
			function _removeActive() {
				element.removeClass('active');
			}
		}
	}
})();
