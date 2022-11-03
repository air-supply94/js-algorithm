import { SkipList } from './skipList';

test('skipList', () => {
  const skipList = new SkipList();
  expect(skipList.search(13))
    .toBeNull();

  skipList.insert(50);
  skipList.insert(50);
  expect(skipList.search(50).data)
    .toBe(50);
  expect(printSkipList(skipList))
    .toBe('50');

  skipList.insert(15);
  expect(skipList.search(15).data)
    .toBe(15);
  expect(printSkipList(skipList))
    .toBe('15,50');

  skipList.insert(13);
  expect(skipList.search(13).data)
    .toBe(13);
  expect(printSkipList(skipList))
    .toBe('13,15,50');

  skipList.insert(20);
  expect(skipList.search(20).data)
    .toBe(20);
  expect(printSkipList(skipList))
    .toBe('13,15,20,50');

  skipList.insert(100);
  expect(skipList.search(100).data)
    .toBe(100);
  expect(printSkipList(skipList))
    .toBe('13,15,20,50,100');

  skipList.insert(75);
  expect(skipList.search(75).data)
    .toBe(75);
  expect(printSkipList(skipList))
    .toBe('13,15,20,50,75,100');

  skipList.insert(99);
  expect(skipList.search(99).data)
    .toBe(99);
  expect(printSkipList(skipList))
    .toBe('13,15,20,50,75,99,100');

  skipList.insert(76);
  expect(skipList.search(76).data)
    .toBe(76);
  expect(printSkipList(skipList))
    .toBe('13,15,20,50,75,76,99,100');

  skipList.insert(83);
  expect(skipList.search(83).data)
    .toBe(83);
  expect(printSkipList(skipList))
    .toBe('13,15,20,50,75,76,83,99,100');

  skipList.insert(65);
  expect(skipList.search(65).data)
    .toBe(65);
  expect(printSkipList(skipList))
    .toBe('13,15,20,50,65,75,76,83,99,100');

  expect(skipList.search(50).data)
    .toBe(50);
  expect(skipList.remove(1))
    .toBeFalsy();

  expect(skipList.remove(13))
    .toBeTruthy();
  expect(skipList.search(13))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('15,20,50,65,75,76,83,99,100');

  expect(skipList.remove(15))
    .toBeTruthy();
  expect(skipList.search(15))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('20,50,65,75,76,83,99,100');

  expect(skipList.remove(20))
    .toBeTruthy();
  expect(skipList.search(20))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('50,65,75,76,83,99,100');

  expect(skipList.remove(50))
    .toBeTruthy();
  expect(skipList.search(50))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('65,75,76,83,99,100');

  expect(skipList.remove(65))
    .toBeTruthy();
  expect(skipList.search(65))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('75,76,83,99,100');

  expect(skipList.remove(75))
    .toBeTruthy();
  expect(skipList.search(75))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('76,83,99,100');

  expect(skipList.remove(76))
    .toBeTruthy();
  expect(skipList.search(76))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('83,99,100');

  expect(skipList.remove(83))
    .toBeTruthy();
  expect(skipList.search(83))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('99,100');

  expect(skipList.remove(99))
    .toBeTruthy();
  expect(skipList.search(99))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('100');

  expect(skipList.remove(100))
    .toBeTruthy();
  expect(skipList.search(100))
    .toBeNull();
  expect(printSkipList(skipList))
    .toBe('');
});

function printSkipList(skipList: SkipList): string {
  return skipList.toArray()
    .map((item) => item.data)
    .join(',');
}
