describe('ddConfirmController', function () {

	var controller, 
	scope;

	beforeEach(function () {

		module('DD');

		inject(function ($controller, $rootScope) {

			scope = $rootScope.$new();

			controller = $controller('ddConfirmController', {
				$scope: scope
			});
		});
	});

	it('should ask the user a question when called', function () {

		controller.ask();
		expect(controller.isVisible).toEqual(true);
	});

	it('should run the user action if the user chooses to', function () {

		scope.action = jasmine.createSpy('action');
		controller.ask();
		controller.sayYes();
		expect(scope.action).toHaveBeenCalled();
	});

	it('should not run the user action if the user chooses not to', function () {

		scope.action = jasmine.createSpy('action');
		controller.ask();
		controller.sayNo();
		expect(scope.action).not.toHaveBeenCalled();
	});

	it('should close on request', function () {

		controller.close();
		expect(controller.isVisible).toEqual(false);
	});

});