describe('ddConfirmController', function () {

	var controller, scope;

	beforeEach(function () {

		module('DD');

		inject(function ($controller, $rootScope) {

			scope = $rootScope.$new();

			scope.question = 'foo?';
			scope.action = jasmine.createSpy('action');

			controller = $controller('ddConfirmController', {
				$scope: scope
			});
		});
	});

	it('should contain a question', function () {

		expect(controller.question).toBe(scope.question);
	});

	it('should ask the user a question when called', function () {

		controller.ask();
		expect(controller.isVisible).toEqual(true);
	});

	it('should perform the requested action if the user wants to and hide the question', function () {

		controller.sayYes();
		expect(controller.isVisible).toEqual(false);
		expect(scope.action).toHaveBeenCalled();
	});

	it('should close if the user doesn\'t want to perform the action', function () {

		controller.sayNo();
		expect(scope.action).not.toHaveBeenCalled();
		expect(controller.isVisible).toEqual(false);
	});

});