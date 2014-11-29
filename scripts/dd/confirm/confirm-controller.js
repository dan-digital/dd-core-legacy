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