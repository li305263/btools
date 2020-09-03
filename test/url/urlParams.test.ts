import { urlParams } from '../../src/index';

test('#urlParams()', () => {
  expect(urlParams('?name=li&age=28')).toEqual({ name: 'li', age: '28' });
  expect(urlParams('?name%3Dli%26age%3D28')).toEqual({ name: 'li', age: '28' });
  expect(urlParams('name%3Dli%26age%3D28')).toEqual({});
  expect(urlParams()).toEqual({});
});
