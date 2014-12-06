describe('ddMessageController', function () {

	var controller, ddMessageService;

	beforeEach(function () {

		module('DD');

		inject(function ($controller) {

			ddMessageService = {};
			controller = $controller('ddMessageController', { ddMessageService: ddMessageService });
		});

	});

	it("should get its data from ddMessageService", function () {

		expect(controller.message).toEqual(ddMessageService);
	});

});