DD.controller('ddMessageController', ['ddMessageService', function (ddMessageService) {

	var self = this;

	self.isHidden = ddMessageService.isHidden;
	self.message = ddMessageService.message;
	self.type = ddMessageService.type;
}]);