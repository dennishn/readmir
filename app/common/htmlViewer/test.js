(function() {
	//angular.module('demoApp', ['nCore.nMessages']);

	angular.module('readmir').config(function(nMessagesProvider) {
		nMessagesProvider.configure({
			verticalPosition: 'top',
			horizontalPosition: 'right'
		});
	});

	angular.module('readmir').controller('demoCtrl', function($scope, nMessages) {
		console.log('heh greetings', $scope)
		var vm = this;
		// Demo Methods
		vm.test = test;
		function test() {
			console.log('jaerh', nMessages);
			nMessages.create('The most basic message type available');
		}
	});

})();