angular.module('dd-templates', ['confirm/confirm.html']);

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
