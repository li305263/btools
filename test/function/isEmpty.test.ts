import { isEmpty } from '../../src/index';

test('#isEmpty()', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty('number')).toBe(false);
  expect(isEmpty({ a: 1 })).toBe(false);
  expect(isEmpty([1])).toBe(false);
});
