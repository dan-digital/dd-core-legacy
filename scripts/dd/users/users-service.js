DD.factory('ddUsersService', ['$http', function ($http) {

	return {
		remove: function (id) {

			console.log(id);

			return $http({
				method: 'DELETE',
				url: '/admin/users/' + id
			});
		}
	};

}]);