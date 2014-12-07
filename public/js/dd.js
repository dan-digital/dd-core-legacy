angular.module('dd-templates', ['confirm/confirm.html', 'message/message.html', 'users/users-table.html']);

angular.module("confirm/confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("confirm/confirm.html",
    "<div class=\"dd-confirm\">\n" +
    "	<div class=\"dd-overlay\" ng-class=\"{ visible: ctrl.isVisible }\" ng-click=\"ctrl.close()\">\n" +
    "		<div class=\"dd-confirm-box\" ng-class=\"{ visible: ctrl.isVisible }\">\n" +
    "			<p class=\"dd-confirm-question\" ng-bind-html=\"ctrl.question\"></p>\n" +
    "			<button ng-click=\"ctrl.sayYes()\" class=\"dd-confirm-yes\">YEAH, DO IT.</button>\n" +
    "			<button ng-click=\"ctrl.sayNo()\" class=\"dd-confirm-no no\">WAIT, NO!</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<a ng-click=\"ctrl.ask()\" class=\"dd-confirm-link\" href=\"javascript:;\" ng-transclude></a>\n" +
    "</div>");
}]);

angular.module("message/message.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("message/message.html",
    "<div class=\"ddMessage {{ ctrl.message.type }}\" ng-class=\"{ hidden: ctrl.message.isHidden }\">{{ ctrl.message.text }}</div>");
}]);

angular.module("users/users-table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users-table.html",
    "<table ng-show=\"ctrl.users !== undefined\" class=\"fade-in\">\n" +
    "	<thead>\n" +
    "		<tr>\n" +
    "			<th>Username</th>\n" +
    "			<th>Options</th>\n" +
    "		</tr>\n" +
    "	</thead>\n" +
    "	<tbody>\n" +
    "		<tr ng-repeat=\"user in ctrl.users\">\n" +
    "			<td>{{ user.username }}</td>\n" +
    "			<td>\n" +
    "				<dd-confirm\n" +
    "					ng-if=\"ctrl.users.length > 1\"\n" +
    "					ng-hide=\"ctrl.pendingUserId == user.id\"\n" +
    "					action=\"ctrl.removeUser(user.id)\"\n" +
    "					question=\"Are you sure you want to remove <strong>{{ user.username }}</strong>?\">remove</dd-confirm>\n" +
    "				<div ng-show=\"ctrl.pendingUserId == user.id\" class=\"loader-small\"></div>\n" +
    "			</td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "</table>\n" +
    "<div ng-show=\"ctrl.users === undefined\" class=\"loader\"></div>");
}]);

var DD = angular.module('DD', ['dd-templates']);
DD.controller('ddConfirmController', ['$scope', '$sce', function ($scope, $sce) {

	var self = this;

	self.question = $scope.question = $sce.trustAsHtml($scope.question);

	self.ask = function () {

		self.isVisible = true;
	};

	self.sayYes = function () {

		self.close();
		$scope.action();
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
			action: '&'
		},
		templateUrl: 'confirm/confirm.html',
		controller: 'ddConfirmController',
		controllerAs: 'ctrl'
	};

});
DD.controller('ddMessageController', ['ddMessageService', function (ddMessageService) {

	var self = this;
	self.message = ddMessageService;
}]);
DD.factory('ddMessageService', ['$timeout', function ($timeout) {

	var self = {};

	self.isHidden = true;
	self.text = '';
	self.type = '';
	self.delay = 2500;

	self.call = function (message, type, delay) {

		self.isHidden = false;
		self.text = message;
		self.type = type;

		$timeout(function () {

			self.isHidden = true;

		}, delay || self.delay);
	};

	self.confirm = function (message) {

		self.call(message, 'confirm');
	};

	self.error = function (message) {

		self.call(message, 'error');
	};

	return self;

}]);
DD.directive('ddMessage', function () {

	return {
		restrict: 'E',
		templateUrl: 'message/message.html',
		controller: 'ddMessageController',
		controllerAs: 'ctrl'
	};

});
DD.controller('ddUsersController', ['ddUsersService', 'ddMessageService', function (ddUsersService, ddMessageService) {

	var self = this;

	self.getUsers = function () {

		ddUsersService.get().success(function (data) {

			self.users = data;
		});
	};

	self.removeUser = function (id) {

		self.pendingUserId = id;

		ddUsersService.remove(id).success(function (data) {

			self.pendingUserId = null;

			angular.forEach(self.users, function (user, index) {

				if (user.id === id) {

					self.users.splice(index, 1);
					ddMessageService.confirm(user.username + ' was succefully removed.');
				}
			});
		});
	};

	self.getUsers();

}]);
DD.factory('ddUsersService', ['$http', function ($http) {

	var url = '/admin/users/';

	return {

		get: function (id) {

			if (id !== undefined) {

				return $http.get(url + id);
			}

			return $http.get(url);
		},

		remove: function (id) {

			return $http({ method: 'DELETE', url: url + id });
		}
	};

}]);
DD.directive('ddUsersTable', [function () {

	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'users/users-table.html',
		controller: 'ddUsersController',
		controllerAs: 'ctrl'
	};

}]);