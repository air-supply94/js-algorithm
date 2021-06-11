import { liuHui } from '../liuHui';

test('liuHui', () => {
  expect(liuHui(1))
    .toBe(3);
  expect(liuHui(2))
    .toBe(3.105828541230249);
  expect(liuHui(10))
    .toBe(3.1415921059992717);
  expect(liuHui(25))
    .toBe(3.141592653589793);
});
