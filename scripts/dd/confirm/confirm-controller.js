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