import { sieve } from '../index';

describe('sieveOfEratosthenes', () => {
  it('should find all primes less than or equal to n', () => {
    expect(sieve(5))
      .toEqual([
        2,
        3,
        5,
      ]);
    expect(sieve(10))
      .toEqual([
        2,
        3,
        5,
        7,
      ]);
    expect(sieve(100))
      .toEqual([
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
      ]);
  });
});
