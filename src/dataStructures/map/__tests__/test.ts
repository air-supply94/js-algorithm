import { Map } from '../index';

const mockCallback = jest.fn();
const key1 = {name: 'a'};
const value1 = {name: 'b'};
const map = new Map([
  [
    key1,
    value1,
  ],
]);

// @ts-ignore
const emptyMap = new Map([{}]);
const _map = new Map(map);
test('map test', () => {
  expect(emptyMap.size)
  .toBe(0);

  expect(_map)
  .toEqual(map);

  expect(_map.size)
  .toBe(1);

  expect(_map.keys())
  .toEqual([key1]);
  expect(_map.values())
  .toEqual([value1]);
  expect(_map.delete(2))
  .toBeFalsy();
  expect(_map.clear())
  .toEqual(_map);
  expect(_map.keys())
  .toEqual([]);
  expect(_map.size)
  .toBe(0);
  _map.forEach(mockCallback);
  expect(mockCallback.mock.calls.length)
  .toBe(0);

  expect(_map.set(key1, value1))
  .toEqual(_map);
  expect(_map.keys())
  .toEqual([key1]);
  expect(_map.values())
  .toEqual([value1]);
  expect(_map.size)
  .toBe(1);
  expect(_map.has(key1))
  .toBe(true);
  expect(_map.has(2))
  .toBe(false);
  expect(_map.get(key1))
  .toEqual(value1);
  expect(_map.keys())
  .toEqual([key1]);
  expect(_map.values())
  .toEqual([value1]);
  expect(_map.entries())
  .toEqual([
    [
      key1,
      value1,
    ],
  ]);
  expect(_map.forEach(mockCallback))
  .toEqual(_map);
  expect(mockCallback.mock.calls.length)
  .toBe(1);
  expect(mockCallback.mock.calls[0][0])
  .toEqual(value1);
  expect(mockCallback.mock.calls[0][1])
  .toEqual(key1);
  expect(mockCallback.mock.results[0].value)
  .toBeUndefined();

  _map.set(key1, value1);
  expect(_map.keys())
  .toEqual([key1]);
  expect(_map.values())
  .toEqual([value1]);
  expect(_map.size)
  .toBe(1);
  expect(_map.has(key1))
  .toBe(true);
  expect(_map.has(2))
  .toBe(false);
  expect(_map.get(key1))
  .toEqual(value1);
  expect(_map.keys())
  .toEqual([key1]);
  expect(_map.values())
  .toEqual([value1]);
  expect(_map.entries())
  .toEqual([
    [
      key1,
      value1,
    ],
  ]);
  expect(_map.forEach(mockCallback))
  .toEqual(_map);
  expect(mockCallback.mock.calls.length)
  .toBe(2);
  expect(mockCallback.mock.calls[1][0])
  .toEqual(value1);
  expect(mockCallback.mock.calls[1][1])
  .toEqual(key1);

  _map.set(value1, key1);
  expect(_map.keys())
  .toEqual([
    key1,
    value1,
  ]);
  expect(_map.values())
  .toEqual([
    value1,
    key1,
  ]);
  expect(_map.size)
  .toBe(2);
  expect(_map.has(key1))
  .toBe(true);
  expect(_map.has(value1))
  .toBe(true);
  expect(_map.get(key1))
  .toEqual(value1);
  expect(_map.get(value1))
  .toEqual(key1);
  expect(_map.keys())
  .toEqual([
    key1,
    value1,
  ]);
  expect(_map.values())
  .toEqual([
    value1,
    key1,
  ]);
  expect(_map.entries())
  .toEqual([
    [
      key1,
      value1,
    ],
    [
      value1,
      key1,
    ],
  ]);
  expect(_map.forEach(mockCallback))
  .toEqual(_map);
  expect(mockCallback.mock.calls.length)
  .toBe(4);
  expect(mockCallback.mock.calls[2][0])
  .toEqual(value1);
  expect(mockCallback.mock.calls[2][1])
  .toEqual(key1);
  expect(mockCallback.mock.calls[3][0])
  .toEqual(key1);
  expect(mockCallback.mock.calls[3][1])
  .toEqual(value1);
  _map.delete('aaa');
  expect(_map.keys())
  .toEqual([
    key1,
    value1,
  ]);
  expect(_map.values())
  .toEqual([
    value1,
    key1,
  ]);
  _map.delete(key1);
  expect(_map.keys())
  .toEqual([value1]);
  expect(_map.values())
  .toEqual([key1]);

  _map.clear();
  expect(_map.keys())
  .toEqual([]);
  expect(_map.values())
  .toEqual([]);
  expect(_map.size)
  .toBe(0);
  expect(_map.has(key1))
  .toBe(false);
  expect(_map.has(value1))
  .toBe(false);
  expect(_map.get(key1))
  .toBeNull();
  expect(_map.get(value1))
  .toBeNull();
  expect(_map.keys())
  .toEqual([]);
  expect(_map.values())
  .toEqual([]);
  expect(_map.entries())
  .toEqual([]);
});

test('test undefined', () => {
  const map5 = new Map();
  map5.set(undefined, undefined);
  expect(map5.size)
  .toBe(1);
  expect(map5.has(undefined))
  .toBe(true);
  expect(map5.values())
  .toEqual([undefined]);
  expect(map5.entries())
  .toEqual([
    [
      undefined,
      undefined,
    ],
  ]);
});
