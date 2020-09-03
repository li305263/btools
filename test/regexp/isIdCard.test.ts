import { isIdCard } from '../../src/index';

test('#isIdCard()', () => {
  expect(isIdCard('110101199003077571')).toBe(true);
  expect(isIdCard('11010119900330181X')).toBe(true);
  expect(isIdCard('11010119900330181x')).toBe(true);
  expect(isIdCard('110101199003301810')).toBe(false);
  expect(isIdCard('100101199003077571')).toBe(false);
  expect(isIdCard('11010119900307757')).toBe(false);
  expect(isIdCard('')).toBe(false);
});
