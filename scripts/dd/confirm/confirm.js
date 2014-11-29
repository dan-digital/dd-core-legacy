DD.directive('ddConfirm', function () {

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			question: '@',
			action: '&'
		},
		templateUrl: 'confirm/confirm.html',
		controller: 'ddConfirmController',
		controllerAs: 'ctrl'
	};

});