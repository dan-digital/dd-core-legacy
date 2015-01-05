angular.module('dd-templates', ['confirm/confirm.html', 'message/message.html', 'users/users-table.html']);

angular.module("confirm/confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("confirm/confirm.html",
    "<div class=\"dd-confirm\">\n" +
    "	<div class=\"dd-overlay\" ng-class=\"{ visible: ctrl.isVisible }\" ng-click=\"ctrl.close()\">\n" +
    "		<div class=\"dd-confirm-box\" ng-class=\"{ visible: ctrl.isVisible }\">\n" +
    "			<p class=\"dd-confirm-question\" ng-bind-html=\"ctrl.question\"></p>\n" +
    "			<button ng-click=\"ctrl.sayYes()\" class=\"dd-confirm-yes\">YEAH, DO IT.</button>\n" +
    "			<button ng-click=\"ctrl.sayNo()\" class=\"dd-confirm-no no\">WAIT, NO!</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<a ng-click=\"ctrl.ask()\" class=\"dd-confirm-link\" href=\"javascript:;\" ng-transclude></a>\n" +
    "</div>");
}]);

angular.module("message/message.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("message/message.html",
    "<div class=\"ddMessage {{ ctrl.message.type }}\" ng-class=\"{ hidden: ctrl.message.isHidden }\">{{ ctrl.message.text }}</div>");
}]);

angular.module("users/users-table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users-table.html",
    "<table ng-show=\"ctrl.users !== undefined\" class=\"fade-in\">\n" +
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
    "				<dd-confirm\n" +
    "					ng-if=\"ctrl.users.length > 1\"\n" +
    "					ng-hide=\"ctrl.pendingUserId == user.id\"\n" +
    "					action=\"ctrl.removeUser(user.id)\"\n" +
    "					question=\"Are you sure you want to remove <strong>{{ user.username }}</strong>?\">remove</dd-confirm>\n" +
    "				<div ng-show=\"ctrl.pendingUserId == user.id\" class=\"loader-small\"></div>\n" +
    "			</td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "</table>\n" +
    "<div ng-show=\"ctrl.users === undefined\" class=\"loader\"></div>");
}]);
