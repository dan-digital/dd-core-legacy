DD.controller('ddConfirmController', ['$scope', 'ddUsersService', function ($scope, ddUsersService) {

	var self = this;

	self.ask = function () {

		self.isVisible = true;
	};

	self.sayYes = function () {

		self.close();
		ddUsersService.remove($scope.id);
	};

	self.sayNo = function () {

		self.close();
	};

	self.close = function () {

		self.isVisible = false;
	};

}]);