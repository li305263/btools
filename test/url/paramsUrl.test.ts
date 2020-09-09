import { paramsUrl } from '../../src/index';

test('#paramsUrl()', () => {
  expect(paramsUrl({ name: 'li', age: 28 })).toBe('name=li&age=28');
  expect(paramsUrl({ name: 'li', age: 28, character: { goodness: true, evil: false }, sex: undefined })).toBe(
    'name=li&age=28&goodness=true&evil=false',
  );
  expect(paramsUrl({})).toBe('');
  expect(paramsUrl()).toBe('');
});
