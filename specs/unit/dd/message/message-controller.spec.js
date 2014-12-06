describe('ddMessageController', function () {

	var controller, ddMessageService;

	beforeEach(function () {

		module('DD');

		inject(function ($controller) {

			ddMessageService = {
				isHidden: true,
				message: 'foo',
				type: 'bar'
			};

			controller = $controller('ddMessageController', { ddMessageService: ddMessageService });
		});

	});

	it("should get its data from ddMessageService", function () {

		expect(controller.isHidden).toEqual(ddMessageService.isHidden);
		expect(controller.message).toEqual(ddMessageService.message);
		expect(controller.type).toEqual(ddMessageService.type);
	});

});