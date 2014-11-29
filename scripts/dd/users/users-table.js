DD.directive('ddUsersTable', [function () {

	return {
		restrict: 'E',
		templateUrl: 'users/users-table.html',
		controller: 'ddUsersController',
		controllerAs: 'ctrl'
	};

}]);