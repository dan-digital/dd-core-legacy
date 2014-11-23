describe('ddConfirmLink', function () {

	var $compile, scope, element;

	beforeEach(function () {

		module('DD');

		inject(function (_$compile_, $rootScope) {

			$compile = _$compile_;
			scope = $rootScope;

			element = angular.element(
				'<div>' +
					'<dd-confirm-link ng-repeat="confirm in confirms" question="{{ confirm.question }}" action="confirm.action">{{ confirm.text }}</dd-confirm-link>' +
				'</div>'
			);

			scope.confirms = [
				{
					text: 'foo',
					question: 'fooQuestion',
					action: function () {}
				},
				{
					text: 'bar',
					question: 'barQuestion',
					action: function () {}
				}
			];

			spyOn(scope.confirms[0], 'action');
		});
	});

	function createConfirmLinks() {

		$compile(element)(scope);
		scope.$digest();
		return element.find('.dd-confirm-link');
	};

	function findAnchorText(index) {

		return element.find('a[ng-transclude] span').eq(index);
	};

	function findConfirmBox(index) {

		return element.find('.dd-confirm-box').eq(index);
	};

	function findConfirmBoxQuestion(index) {

		return element.find('.dd-confirm-question').eq(index);
	};

	function findConfirmBoxYes(index) {

		return element.find('.dd-confirm-yes').eq(index);
	};

	function findConfirmBoxNo(index) {

		return element.find('.dd-confirm-no').eq(index);
	};

	it('should be ng-repeat-able', function () {

		var confirmLinks = createConfirmLinks();
		expect(confirmLinks.length).toEqual(2);
	});

	it('should contain the correct anchor text', function () {

		var confirmLinks = createConfirmLinks();
		for (var i = 0, l = confirmLinks.length; i < l; i++) {
			expect(findAnchorText(i).text()).toBe(scope.confirms[i].text);
		}
	});

	it('should contain a hidden confirm box', function () {

		var confirmLinks = createConfirmLinks();
		expect(findConfirmBox(0).hasClass('visible')).toEqual(false);
	});

	it('should show the confirm box with the correct question when clicked', function () {

		var confirmLinks = createConfirmLinks();
		
		confirmLinks.eq(0).click();

		expect(findConfirmBox(0).hasClass('visible')).toEqual(true);
		expect(findConfirmBoxQuestion(0).text()).toBe(scope.confirms[0].question);
		expect(findConfirmBox(1).hasClass('visible')).toEqual(false);
	});

	it('should hide the confirm box if the user clicks \'no\'', function () {

		var confirmLinks = createConfirmLinks();

		confirmLinks.eq(0).click();
		confirmLinks.eq(1).click();
		findConfirmBoxNo(0).click();

		expect(findConfirmBox(0).hasClass('visible')).toEqual(false);
		expect(findConfirmBox(1).hasClass('visible')).toEqual(true);
	});

	it('should hide the confirm box if the use clicks \'yes\'', function () {

		var confirmLinks = createConfirmLinks();

		confirmLinks.eq(0).click();
		findConfirmBoxYes(0).click();

		expect(findConfirmBox(0).hasClass('visible')).toEqual(false);
	});

});