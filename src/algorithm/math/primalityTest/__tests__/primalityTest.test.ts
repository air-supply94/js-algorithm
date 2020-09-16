import { primalityTest } from '../index';

describe('trialDivision', () => {
  it('should detect prime numbers', () => {
    expect(primalityTest(1))
      .toBe(false);
    expect(primalityTest(2))
      .toBe(true);
    expect(primalityTest(3))
      .toBe(true);
    expect(primalityTest(5))
      .toBe(true);
    expect(primalityTest(11))
      .toBe(true);
    expect(primalityTest(191))
      .toBe(true);
    expect(primalityTest(191))
      .toBe(true);
    expect(primalityTest(199))
      .toBe(true);

    expect(primalityTest(-1))
      .toBe(false);
    expect(primalityTest(0))
      .toBe(false);
    expect(primalityTest(4))
      .toBe(false);
    expect(primalityTest(6))
      .toBe(false);
    expect(primalityTest(12))
      .toBe(false);
    expect(primalityTest(14))
      .toBe(false);
    expect(primalityTest(25))
      .toBe(false);
    expect(primalityTest(192))
      .toBe(false);
    expect(primalityTest(200))
      .toBe(false);
    expect(primalityTest(400))
      .toBe(false);
  });
});
