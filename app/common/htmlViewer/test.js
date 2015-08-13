(function() {
	angular.module('demoApp', ['nCore.nMessages']);

	angular.module('demoApp').config(function(nMessagesProvider) {
		nMessagesProvider.configure({
			verticalPosition: 'top',
			horizontalPosition: 'right'
		});
	});

	angular.module('demoApp').controller('demoCtrl', function($scope, nMessages) {
		console.log('heh greetings', $scope)
		var vm = this;
		// Demo Methods
		vm.test = test;
		function test() {
			console.log('jaerh', nMessages);
			nMessages.create('The most basic message type available');
		}

		vm.createBasicMessage = createBasicMessage;
		vm.createAdvancedMessage = createAdvancedMessage;
		vm.createCustomMessage = createCustomMessage;

		vm.messageContents = [
			'Dette er en besked',
			'Dette er også en besked',
			'Dette er måske ikke en besked',
			'Nogen siger dette er en besked, men ingen vil stå ved det',
			'Ingen ved om dette er en besked',
			'Denne besked blev lavet i et reagensglas',
			'Nogen siger dette er en besked, men ingen vil stå ved det, Nogen siger dette er en besked, men ingen vil stå ved det, Nogen siger dette er en besked, men ingen vil stå ved det, Nogen siger dette er en besked, men ingen vil stå ved det'
		];
		vm.messageTypes = ['success', 'warning', 'alert', 'info', ''];

		vm.message = {
			type: 'success',
			dismissButtonHtml: '&times;',
			dismissOnClick: true,
			dismissButton: true,
			showDismissButton: true,
			dismissOnTimeout: false,
			timeout: 3200
		};

		vm.openMessages = [];

		function createBasicMessage() {
			nMessages.create('The most basic message type available');
		}

		function createAdvancedMessage() {
			nMessages.create({
				type: 'success',
				content: 'Such message',
				dismissButton: true,
				dismissButtonHtml: '&times;',
				dismissOnClick: true,
				dismissOnTimeout: false,
				timeout: 4000
			});
		}

		function createCustomMessage() {
			var msg = angular.copy(vm.message);
			msg.content = _getRandomMessage();
			msg.type = _getRandomType();
			var msgRef =  nMessages.create(msg);
			vm.openMessages.push(msgRef);
		}

		function _getRandomMessage() {
			return vm.messageContents[Math.floor(Math.random() * vm.messageContents.length)];
		}

		function _getRandomType() {
			return vm.messageTypes[Math.floor(Math.random() * vm.messageTypes.length)];
		}

	});

})();