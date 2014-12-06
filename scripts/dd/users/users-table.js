DD.directive('ddUsersTable', [function () {

	return {
		scope: {},
		restrict: 'E',
		templateUrl: 'users/users-table.html',
		controller: 'ddUsersController',
		controllerAs: 'ctrl'
	};

}]);