DD.directive('ddConfirm', function () {

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			question: '@',
			resource: '@'
		},
		templateUrl: 'confirm/confirm.html',
		controller: 'ddConfirmController',
		controllerAs: 'ctrl'
	};

});