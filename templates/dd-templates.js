angular.module('dd-templates', ['confirm/confirm-link.html']);

angular.module("confirm/confirm-link.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("confirm/confirm-link.html",
    "<div class=\"dd-confirm\">\n" +
    "	<div class=\"dd-confirm-box\" ng-class=\"{ visible: ctrl.isVisible }\">\n" +
    "		<p class=\"dd-confirm-question\">{{ ctrl.question }}</p>\n" +
    "		<button ng-click=\"ctrl.sayYes()\" class=\"dd-confirm-yes\">yes</button>\n" +
    "		<button ng-click=\"ctrl.sayNo()\" class=\"dd-confirm-no no\">no</button>\n" +
    "	</div>\n" +
    "	<a ng-click=\"ctrl.ask()\" class=\"dd-confirm-link\" href=\"javascript:;\" ng-transclude></a>\n" +
    "</div>");
}]);
