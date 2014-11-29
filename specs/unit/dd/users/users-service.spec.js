describe('ddUsersService', function () {

	var ddUsersService, $httpBackend;

	var users = [
		{
			id: 0,
			username: 'Foo'
		},
		{
			id: 1,
			username: 'Bar'
		},
		{
			id: 2,
			username: 'Baz'
		}
	];

	var user = {
		id: 0,
		username: 'Foo'
	};

	var url = '/admin/users/';

	beforeEach(function () {

		module('DD');

		inject(function (_ddUsersService_, _$httpBackend_) {

			ddUsersService = _ddUsersService_;
			$httpBackend = _$httpBackend_;
		});
	});

	it('should get a list of all users', function () {

		$httpBackend.expectGET(url);
		$httpBackend.whenGET(url).respond(users);

		ddUsersService.get().success(function (data) {

			expect(data).toEqual(users);
		});

		$httpBackend.flush();
	});

	it('should get a user by id', function () {

		$httpBackend.expectGET(url + 0);
		$httpBackend.whenGET(url + 0).respond(user);

		ddUsersService.get(0).success(function (data) {

			expect(data).toEqual(user);
		});

		$httpBackend.flush();
	});

	it('should remove a user by id', function () {

		$httpBackend.expectDELETE(url + 0);
		$httpBackend.whenDELETE(url + 0).respond('');

		ddUsersService.remove(0).success(function (data) {

			expect(data).toEqual('');
		});

		$httpBackend.flush();
	});

});