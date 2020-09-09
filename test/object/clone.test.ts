import { clone } from '../../src/index';

test('#clone()', () => {
  const obj = { a: '1', b: 2, f: [{}, null, 3] };
  const cloneObj = clone(obj);
  expect(obj).toEqual(cloneObj);
});
