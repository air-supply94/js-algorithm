import { RandomizedSet, RandomizedSetBlackList } from '../randomizedSet';

test('randomizedSet', () => {
  const randomizedSet = new RandomizedSet();

  expect(randomizedSet.insert(1))
    .toBeTruthy();

  expect(randomizedSet.remove(2))
    .toBeFalsy();

  expect(randomizedSet.insert(2))
    .toBeTruthy();

  expect([
    1,
    2,
  ].includes(randomizedSet.getRandom()))
    .toBeTruthy();

  expect(randomizedSet.remove(1))
    .toBeTruthy();

  expect(randomizedSet.insert(2))
    .toBeFalsy();

  expect(randomizedSet.getRandom())
    .toBe(2);
});

test('randomizedSetBlackList', () => {
  const randomizedSetBlackList1 = new RandomizedSetBlackList(4, [
    0,
    1,
    2,
  ]);

  expect(randomizedSetBlackList1.pick())
    .toBe(3);

  const randomizedSetBlackList2 = new RandomizedSetBlackList(3, [2]);

  expect([
    0,
    1,
  ].includes(randomizedSetBlackList2.pick()))
    .toBeTruthy();
});
