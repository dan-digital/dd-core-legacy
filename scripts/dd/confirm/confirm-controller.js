DD.controller('ddConfirmController', ['$scope', function ($scope) {

	var self = this;

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