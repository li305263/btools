import { shuffle } from '../../src/index';

test('#shuffle', () => {
  expect(shuffle([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5]);
});
