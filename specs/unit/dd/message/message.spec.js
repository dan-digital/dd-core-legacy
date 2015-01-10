describe('ddMessage', function () {

	var $compile, scope;

	beforeEach(module('DD'));

	beforeEach(inject(function (_$compile_, $rootScope) {

		$compile = _$compile_;
		scope = $rootScope;
	}));

	function getElement () {

		var element = $compile('<dd-message></dd-message>')(scope);
		scope.$digest();
		return element.find('.ddMessage');
	};

	it('should contain a message', function () {

		var element = getElement();

		scope.ctrl.message.text = 'foo';
		scope.$digest();
		expect(element.html()).toEqual(scope.ctrl.message.text);
	});

	it('should contain the .hidden class when hidden', function () {

		var element = getElement();

		scope.ctrl.message.isHidden = true;
		scope.$digest();
		expect(element.hasClass('hidden')).toEqual(true);

		scope.ctrl.message.isHidden = false;
		scope.$digest();
		expect(element.hasClass('hidden')).toEqual(false);
	});

	it('should contain a class with the same name as the type', function () {

		var element = getElement();

		scope.ctrl.message.type = 'foo';
		scope.$digest();
		expect(element.hasClass('foo')).toEqual(true);
	});

});