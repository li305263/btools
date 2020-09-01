import { toType } from '../../src/index';

test('#toType()', () => {
  expect(toType(null)).toEqual('null');
  expect(toType(undefined)).toEqual('undefined');
  expect(toType(function () {})).toEqual('function');
  expect(toType(1)).toEqual('number');
  expect(toType(false)).toEqual('boolean');
  expect(toType('number')).toEqual('string');
  expect(toType({})).toEqual('object');
  expect(toType([])).toEqual('array');
  expect(toType(new RegExp(''))).toEqual('regexp');
  expect(toType(new Date())).toEqual('date');
  expect(toType(new Error())).toEqual('error');
});
