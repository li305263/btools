import { dateFormat } from '../../src/index';

test('#dateFormat()', () => {
  expect(dateFormat(1599141322013)).toEqual('2020-09-03');
  expect(dateFormat(1599141322013, 'YYYY年MM月DD日')).toEqual('2020年09月03日');
  expect(dateFormat(1599141322013, 'HH:mm:ss A')).toEqual('21:55:22 PM');
  expect(dateFormat(1599141613932, 'YYYY-MM-DD H:mm:ss a')).toEqual('2020-09-03 22:00:13 pm');
  expect(dateFormat(1599138549000, 'YY-M-D hh:m:s a')).toEqual('20-9-3 09:9:9 pm');
  expect(dateFormat(1599095349000, 'YY-M-D h:m:s a')).toEqual('20-9-3 9:9:9 am');
  expect(dateFormat(1599095349000, 'YY-M-D h:m:s A')).toEqual('20-9-3 9:9:9 AM');
  expect(dateFormat(1599062949000, 'hh:m:s')).toEqual('12:9:9');
});
