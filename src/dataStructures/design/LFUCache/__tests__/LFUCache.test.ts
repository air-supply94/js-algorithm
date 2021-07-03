import { LFUCache } from '../LFUCache';

test('LFUCache', () => {
  const lFUCache = new LFUCache(2);
  lFUCache.put(1, 1);
  lFUCache.put(2, 2);
  expect(lFUCache.get(1))
    .toBe(1);

  lFUCache.put(3, 3);
  expect(lFUCache.get(2))
    .toBe(-1);
  expect(lFUCache.get(3))
    .toBe(3);

  lFUCache.put(4, 4);
  lFUCache.put(4, 5);
  expect(lFUCache.get(1))
    .toBe(-1);
  expect(lFUCache.get(3))
    .toBe(3);
  expect(lFUCache.get(4))
    .toBe(5);

  // 特殊
  const lfu = new LFUCache(0);
  lfu.put(0, 0);
  expect(lfu.get(0))
    .toBe(-1);
});
