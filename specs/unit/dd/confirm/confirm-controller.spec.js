describe('ddConfirmController', function () {

	var controller, 
	scope, 
	usersService = {
		remove: function (id) { }
	};

	beforeEach(function () {

		module('DD');

		inject(function ($controller, $rootScope) {

			scope = $rootScope.$new();

			controller = $controller('ddConfirmController', {
				$scope: scope,
				ddUsersService: usersService
			});
		});

		spyOn(usersService, 'remove');
	});

	it('should ask the user a question when called', function () {

		controller.ask();
		expect(controller.isVisible).toEqual(true);
	});

	it('should delete the specified resource if the user chooses to', function () {

		scope.resource = 0;
		controller.sayYes();
		expect(controller.isVisible).toEqual(false);
		expect(usersService.remove).toHaveBeenCalledWith(0);
	});

	it('should not delete the resource if the user chooses not to', function () {

		scope.resource = 0;
		controller.sayNo();
		expect(controller.isVisible).toEqual(false);
		expect(usersService.remove).not.toHaveBeenCalled();
	});

	it('should close on request', function () {

		controller.close();
		expect(controller.isVisible).toEqual(false);
	});

});