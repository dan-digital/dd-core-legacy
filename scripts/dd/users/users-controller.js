DD.controller('ddUsersController', ['ddUsersService', function (ddUsersService) {

	var self = this;

	self.getUsers = function () {

		ddUsersService.get().success(function (data) {

			self.users = data;
		});
	};

	self.removeUser = function (id) {

		self.pendingUserId = id;

		ddUsersService.remove(id).success(function (data) {

			self.pendingUserId = null;

			angular.forEach(self.users, function (user, index) {

				if (user.id === id) {

					self.users.splice(index, 1);
				}
			});
		});
	};

	self.getUsers();

}]);