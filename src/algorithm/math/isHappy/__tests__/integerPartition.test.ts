import { isHappy } from '../index';

test('isHappy', () => {
  expect(isHappy(19))
    .toBeTruthy();
  expect(isHappy(4))
    .toBeFalsy();
  expect(isHappy(16))
    .toBeFalsy();
  expect(isHappy(37))
    .toBeFalsy();
  expect(isHappy(58))
    .toBeFalsy();
  expect(isHappy(89))
    .toBeFalsy();
});
