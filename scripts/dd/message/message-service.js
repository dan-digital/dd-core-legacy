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