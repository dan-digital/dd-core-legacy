var DD = angular.module('DD', []);
DD.controller('ddConfirmController', ['$scope', function ($scope) {

	var self = this;

	self.question = $scope.question;

	self.ask = function () {

		self.isVisible = true;
	};

	self.sayYes = function () {

		self.isVisible = false;
		$scope.action();
	};

	self.sayNo = function () {

		self.isVisible = false;
	};

}]);
DD.directive('ddConfirmLink', function () {

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			question: '@',
			action: '&'
		},
		template: 
			'<div class="dd-confirm">' +
				'<div class="dd-confirm-box" ng-class="{ visible: ctrl.isVisible }">' +
					'<p class="dd-confirm-question">{{ ctrl.question }}</p>' +
					'<button ng-click="ctrl.sayYes()" class="dd-confirm-yes">yes</button>' +
					'<button ng-click="ctrl.sayNo()" class="dd-confirm-no no">no</button>' +
				'</div>' +
				'<a ng-click="ctrl.ask()" class="dd-confirm-link" href="javascript:;" ng-transclude></a>' +
			'</div>',
		controller: 'ddConfirmController',
		controllerAs: 'ctrl'
	};

});