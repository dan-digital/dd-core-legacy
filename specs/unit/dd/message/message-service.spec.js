describe('ddMessageService', function () {

	var ddMessageService, $timeout;

	beforeEach(function () {

		module('DD');

		inject(function (_ddMessageService_, _$timeout_) {

			ddMessageService = _ddMessageService_;
			$timeout = _$timeout_;
		});
	});

	it('should be hidden by default', function () {

		expect(ddMessageService.isHidden).toEqual(true);
	});

	it('should contain a default delay time of at least half a second', function () {

		expect(ddMessageService.delay).toBeGreaterThan(499);
	});

	it('should display when called with a message and then disappear automatically', function () {

		var message = 'foo';

		ddMessageService.call(message);

		expect(ddMessageService.text).toEqual(message);
		expect(ddMessageService.isHidden).toEqual(false);

		$timeout.flush(ddMessageService.delay);

		expect(ddMessageService.isHidden).toEqual(true);
	});

	it('should allow for different message types', function () {

		var message = 'foo';
		var types = ['bar', 'baz'];

		for (var i = 0, l = types.length; i < l; i++) {
			ddMessageService.call(message, types[i]);
			expect(ddMessageService.type).toEqual(types[i]);
		};
	});

	it('should allow for a custom delay time', function () {

		var delay = 1000;
		var customDelay = 500;

		ddMessageService.delay = delay;
		ddMessageService.call('foo', 'bar', customDelay);
		$timeout.flush(customDelay);

		expect(ddMessageService.delay).toEqual(delay);
		expect(ddMessageService.isHidden).toEqual(true);
	});

	it('should have a confirm helper', function () {

		var message = 'foo';
		
		ddMessageService.confirm(message);

		expect(ddMessageService.text).toEqual(message);
		expect(ddMessageService.type).toBeTruthy();
	});

	it('should have an error helper', function () {

		var message = 'foo';
		
		ddMessageService.error(message);

		expect(ddMessageService.text).toEqual(message);
		expect(ddMessageService.type).toBeTruthy();
	});

});