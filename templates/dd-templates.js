angular.module('dd-templates', ['confirm/confirm.html', 'users/users-table.html']);

angular.module("confirm/confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("confirm/confirm.html",
    "<div class=\"dd-confirm\">\n" +
    "	<div class=\"dd-overlay\" ng-class=\"{ visible: ctrl.isVisible }\" ng-click=\"ctrl.close()\">\n" +
    "		<div class=\"dd-confirm-box\" ng-class=\"{ visible: ctrl.isVisible }\">\n" +
    "			<p class=\"dd-confirm-question\">{{ question }}</p>\n" +
    "			<button ng-click=\"ctrl.sayYes()\" class=\"dd-confirm-yes\">yes</button>\n" +
    "			<button ng-click=\"ctrl.sayNo()\" class=\"dd-confirm-no no\">no</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<a ng-click=\"ctrl.ask()\" class=\"dd-confirm-link\" href=\"javascript:;\" ng-transclude></a>\n" +
    "</div>");
}]);

angular.module("users/users-table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users-table.html",
    "<table>\n" +
    "	<thead>\n" +
    "		<tr>\n" +
    "			<th>Username</th>\n" +
    "			<th>Options</th>\n" +
    "		</tr>\n" +
    "	</thead>\n" +
    "	<tbody>\n" +
    "		<tr ng-repeat=\"user in ctrl.users\">\n" +
    "			<td>{{ user.username }}</td>\n" +
    "			<td>\n" +
    "				<dd-confirm action=\"ctrl.removeUser(user.id)\" question=\"Are you sure you want to remove {{ user.username }}?\">remove</dd-confirm>\n" +
    "			</td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "</table>");
}]);
