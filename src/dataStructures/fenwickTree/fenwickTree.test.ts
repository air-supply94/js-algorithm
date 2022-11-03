import { FenwickTree } from './fenwickTree';

describe('FenwickTree', () => {
  test('should create correct fenwick tree', () => {
    const inputArray = [
      3,
      2,
      -1,
      6,
      5,
      4,
      -3,
      3,
      7,
      2,
      3,
    ];

    const tree = new FenwickTree(inputArray.length);

    inputArray.forEach((value, index) => {
      tree.increase(index + 1, value);
    });

    expect(tree.query(1))
      .toBe(3);
    expect(tree.query(2))
      .toBe(5);
    expect(tree.query(3))
      .toBe(4);
    expect(tree.query(4))
      .toBe(10);
    expect(tree.query(5))
      .toBe(15);
    expect(tree.query(6))
      .toBe(19);
    expect(tree.query(7))
      .toBe(16);
    expect(tree.query(8))
      .toBe(19);
    expect(tree.query(9))
      .toBe(26);
    expect(tree.query(10))
      .toBe(28);
    expect(tree.query(11))
      .toBe(31);

    expect(tree.queryRange(1, 1))
      .toBe(3);
    expect(tree.queryRange(1, 2))
      .toBe(5);
    expect(tree.queryRange(2, 4))
      .toBe(7);
    expect(tree.queryRange(6, 9))
      .toBe(11);

    tree.increase(3, 1);

    expect(tree.query(1))
      .toBe(3);
    expect(tree.query(2))
      .toBe(5);
    expect(tree.query(3))
      .toBe(5);
    expect(tree.query(4))
      .toBe(11);
    expect(tree.query(5))
      .toBe(16);
    expect(tree.query(6))
      .toBe(20);
    expect(tree.query(7))
      .toBe(17);
    expect(tree.query(8))
      .toBe(20);
    expect(tree.query(9))
      .toBe(27);
    expect(tree.query(10))
      .toBe(29);
    expect(tree.query(11))
      .toBe(32);

    expect(tree.queryRange(1, 1))
      .toBe(3);
    expect(tree.queryRange(1, 2))
      .toBe(5);
    expect(tree.queryRange(2, 4))
      .toBe(8);
    expect(tree.queryRange(6, 9))
      .toBe(11);
  });

  test('should correctly execute queries', () => {
    const tree = new FenwickTree(5);

    tree.increase(1, 4);
    tree.increase(3, 7);

    expect(tree.query(1))
      .toBe(4);
    expect(tree.query(3))
      .toBe(11);
    expect(tree.query(5))
      .toBe(11);
    expect(tree.queryRange(2, 3))
      .toBe(7);

    tree.increase(2, 5);
    expect(tree.query(5))
      .toBe(16);

    tree.increase(1, 3);
    expect(tree.queryRange(1, 1))
      .toBe(7);
    expect(tree.query(5))
      .toBe(19);
    expect(tree.queryRange(1, 5))
      .toBe(19);
  });

  test('should throw exceptions', () => {
    const tree = new FenwickTree(5);

    expect(tree.increase(0, 1))
      .toBeUndefined();
    expect(tree.increase(10, 1))
      .toBeUndefined();
    expect(tree.query(0))
      .toBe(0);
    expect(tree.query(10))
      .toBe(0);
    expect(tree.queryRange(3, 2))
      .toBe(0);
  });
});
