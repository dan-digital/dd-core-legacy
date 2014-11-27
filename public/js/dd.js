angular.module('dd-templates', ['confirm/confirm.html']);

angular.module("confirm/confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("confirm/confirm.html",
    "<div class=\"dd-confirm\">\n" +
    "	<div class=\"dd-overlay\" ng-class=\"{ visible: ctrl.isVisible }\" ng-click=\"ctrl.close()\">\n" +
    "		<div class=\"dd-confirm-box\" ng-class=\"{ visible: ctrl.isVisible }\">\n" +
    "			<p class=\"dd-confirm-question\">{{ question }}</p>\n" +
    "			<button ng-click=\"ctrl.sayYes()\" class=\"dd-confirm-yes\">yes</button>\n" +
    "			<button ng-click=\"ctrl.sayNo()\" class=\"dd-confirm-no no\">no</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<a ng-click=\"ctrl.ask()\" class=\"dd-confirm-link\" href=\"javascript:;\" ng-transclude></a>\n" +
    "</div>");
}]);

var DD = angular.module('DD', ['dd-templates']);
DD.controller('ddConfirmController', ['$scope', 'ddUsersService', function ($scope, ddUsersService) {

	var self = this;

	self.ask = function () {

		self.isVisible = true;
	};

	self.sayYes = function () {

		self.close();
		ddUsersService.remove($scope.resource);
	};

	self.sayNo = function () {

		self.close();
	};

	self.close = function () {

		self.isVisible = false;
	};

}]);
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
DD.factory('ddUsersService', ['$http', function ($http) {

	return {
		remove: function (user) {

			return $http({
				method: 'DELETE',
				url: '/admin/users/' + user
			});
		}
	};

}]);