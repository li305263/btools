import { isEmail } from '../../src/index';

test('#isEmail()', () => {
  expect(isEmail('li305263')).toBe(false);
  expect(isEmail('li305263@')).toBe(false);
  expect(isEmail('li305263@test')).toBe(false);
  expect(isEmail('li305263@test.com')).toBe(true);
});
