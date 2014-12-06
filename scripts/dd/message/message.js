DD.directive('ddMessage', function () {

	return {
		restrict: 'E',
		templateUrl: 'message/message.html',
		controller: 'ddMessageController',
		controllerAs: 'ctrl'
	};

});