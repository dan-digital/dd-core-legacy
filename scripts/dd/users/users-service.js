DD.factory('ddUsersService', ['$http', function ($http) {

	var url = '/admin/users/';

	return {

		get: function (id) {

			if (id !== undefined) {

				return $http.get(url + id);
			}

			return $http.get(url);
		},

		remove: function (id) {

			return $http({ method: 'DELETE', url: url + id });
		}
	};

}]);