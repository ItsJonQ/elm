import { noop } from '../index';

describe('noop', () => {
	test('should return undefined', () => {
		expect(noop()).toBe(undefined);
	});
});
