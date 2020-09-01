import { isPhone } from '../../src/index';

test('#isPhone()', () => {
  expect(isPhone('13333333333')).toBe(true);
  expect(isPhone('133333333333')).toBe(false);
  expect(isPhone('1333333333')).toBe(false);
  expect(isPhone('33333333333')).toBe(false);
});
