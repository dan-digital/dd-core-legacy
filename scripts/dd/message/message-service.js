DD.factory('ddMessageService', ['$timeout', function ($timeout) {

	var self = {};

	self.isHidden = true;
	self.message = '';
	self.type = '';
	self.delay = 1000;

	self.call = function (message, type, delay) {

		self.isHidden = false;
		self.message = message;
		self.type = type;

		$timeout(function () {

			self.isHidden = true;

		}, delay || self.delay);
	};

	return self;

}]);