import { changeCoins } from '../changeCoins';

test('changeCoins', () => {
  expect(changeCoins(5, [
    1,
    2,
    5,
  ]))
    .toBe(4);

  expect(changeCoins(3, [2]))
    .toBe(0);
});
