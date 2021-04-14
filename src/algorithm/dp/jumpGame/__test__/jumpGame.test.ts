import { jumpGame } from '../jumpGame';

test('should solve Jump Game problem in backtracking manner', () => {
  expect(jumpGame([
    1,
    0,
  ]))
    .toBe(true);
  expect(jumpGame([
    100,
    0,
  ]))
    .toBe(true);
  expect(jumpGame([
    2,
    3,
    1,
    1,
    4,
  ]))
    .toBe(true);
  expect(jumpGame([
    1,
    1,
    1,
    1,
    1,
  ]))
    .toBe(true);
  expect(jumpGame([
    1,
    1,
    1,
    10,
    1,
  ]))
    .toBe(true);
  expect(jumpGame([
    1,
    5,
    2,
    1,
    0,
    2,
    0,
  ]))
    .toBe(true);

  expect(jumpGame([
    1,
    0,
    1,
  ]))
    .toBe(false);
  expect(jumpGame([
    3,
    2,
    1,
    0,
    4,
  ]))
    .toBe(false);
  expect(jumpGame([
    0,
    0,
    0,
    0,
    0,
  ]))
    .toBe(false);
  expect(jumpGame([
    5,
    4,
    3,
    2,
    1,
    0,
    0,
  ]))
    .toBe(false);
});
