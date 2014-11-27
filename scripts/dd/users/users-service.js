DD.factory('ddUsersService', ['$http', function ($http) {

	return {
		remove: function (user) {

			return $http({
				method: 'DELETE',
				url: '/admin/users/' + user
			});
		}
	};

}]);