import { random } from '../../src/index';

test('#random', () => {
  expect(random(10)).toBeLessThan(11);
  expect(random(5, 10)).toBeGreaterThan(4);
});
