import type { interfaces } from '../../types';
import { SkipList } from './skipList';
import { expect, test } from 'vitest';

test('skipList for number', () => {
  const skipList = new SkipList<number>();
  const data = Array(20)
    .fill(0)
    .map((_, index) => index);
  expect(() => skipList.insert(null)).toThrow();

  expect(skipList.remove(-1)).toBeFalsy();

  data.forEach((item, index) => {
    expect(skipList.insert(item)).toBeTruthy();
    expect(skipList.insert(item)).toBeFalsy();
    expect(skipList.search(item)).toBe(item);
    expect(printSkipList(skipList)).toBe(data.slice(0, index + 1).join(','));
  });

  expect(skipList.remove(100)).toBeFalsy();

  data.forEach((item, index) => {
    expect(skipList.remove(item)).toBeTruthy();
    expect(skipList.search(item)).toBeNull();
    expect(printSkipList(skipList)).toBe(data.slice(index + 1).join(','));
  });
});

test('skipList for object', () => {
  const data: Array<{ value: number }> = Array(20)
    .fill(null)
    .map((_, index) => ({
      value: index,
      toString() {
        return this.value;
      },
    }));

  const skipList = new SkipList<{ value: number }>((a, b) => {
    if (a.value === b.value) {
      return 0;
    }

    return a.value < b.value ? -1 : 1;
  });

  expect(skipList.remove({ value: -1 })).toBeFalsy();

  data.forEach((item, index) => {
    expect(skipList.search(item)).toBeNull();
    expect(skipList.insert(item)).toBeTruthy();
    expect(skipList.insert(item)).toBeFalsy();
    expect(skipList.search(item)).toBe(item);
    expect(printSkipList(skipList)).toBe(data.slice(0, index + 1).join(','));
  });

  expect(skipList.remove({ value: 100 })).toBeFalsy();

  data.forEach((item, index) => {
    expect(skipList.remove(item)).toBeTruthy();
    expect(skipList.search(item)).toBeNull();
    expect(printSkipList(skipList)).toBe(data.slice(index + 1).join(','));
  });
});

function printSkipList<T = unknown>(skipList: interfaces.SkipList<T>): string {
  return skipList.toArray().join(',');
}
