import { BloomFilter } from '../bloomFilter';

describe('BloomFilter', () => {
  let bloomFilter;
  const people = [
    'Bruce Wayne',
    'Clark Kent',
    'Barry Allen',
  ];

  beforeEach(() => {
    bloomFilter = new BloomFilter();
  });

  test('should insert strings correctly and return true when checking for inserted values', () => {
    people.forEach((person) => bloomFilter.insert(person));

    expect(bloomFilter.contain('Bruce Wayne'))
      .toBe(true);
    expect(bloomFilter.contain('Clark Kent'))
      .toBe(true);
    expect(bloomFilter.contain('Barry Allen'))
      .toBe(true);

    expect(bloomFilter.contain('Tony Stark'))
      .toBe(false);
  });
});
