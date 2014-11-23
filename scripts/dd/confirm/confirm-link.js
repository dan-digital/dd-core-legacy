DD.directive('ddConfirmLink', function () {

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			question: '@',
			action: '&'
		},
		templateUrl: 'confirm/confirm-link.html',
		controller: 'ddConfirmController',
		controllerAs: 'ctrl'
	};

});