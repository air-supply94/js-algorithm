import { SegmentTree } from './segmentTree';

describe('SegmentTree', () => {
  test('should do min range query on power of two length array', () => {
    const array = [
      -1,
      3,
      4,
      0,
      2,
      1,
    ];
    const segmentTree = new SegmentTree(array, Math.min, Infinity);

    expect(segmentTree.rangeQuery(0, 5))
      .toBe(-1);
    expect(segmentTree.rangeQuery(0, 2))
      .toBe(-1);
    expect(segmentTree.rangeQuery(1, 3))
      .toBe(0);
    expect(segmentTree.rangeQuery(2, 4))
      .toBe(0);
    expect(segmentTree.rangeQuery(4, 5))
      .toBe(1);
    expect(segmentTree.rangeQuery(2, 2))
      .toBe(4);
  });

  test('should do min range query on not power of two length array', () => {
    const array = [
      -1,
      2,
      4,
      0,
    ];
    const segmentTree = new SegmentTree(array, Math.min, Infinity);

    expect(segmentTree.rangeQuery(0, 4))
      .toBe(-1);
    expect(segmentTree.rangeQuery(0, 1))
      .toBe(-1);
    expect(segmentTree.rangeQuery(1, 3))
      .toBe(0);
    expect(segmentTree.rangeQuery(1, 2))
      .toBe(2);
    expect(segmentTree.rangeQuery(2, 3))
      .toBe(0);
    expect(segmentTree.rangeQuery(2, 2))
      .toBe(4);
  });

  test('should do max range query', () => {
    const array = [
      -1,
      3,
      4,
      0,
      2,
      1,
    ];
    const segmentTree = new SegmentTree(array, Math.max, -Infinity);

    expect(segmentTree.rangeQuery(0, 5))
      .toBe(4);
    expect(segmentTree.rangeQuery(0, 1))
      .toBe(3);
    expect(segmentTree.rangeQuery(1, 3))
      .toBe(4);
    expect(segmentTree.rangeQuery(2, 4))
      .toBe(4);
    expect(segmentTree.rangeQuery(4, 5))
      .toBe(2);
    expect(segmentTree.rangeQuery(3, 3))
      .toBe(0);
  });

  test('should do sum range query', () => {
    const array = [
      -1,
      3,
      4,
      0,
      2,
      1,
    ];
    const segmentTree = new SegmentTree(array, (a, b) => (a + b), 0);

    expect(segmentTree.rangeQuery(0, 5))
      .toBe(9);
    expect(segmentTree.rangeQuery(0, 1))
      .toBe(2);
    expect(segmentTree.rangeQuery(1, 3))
      .toBe(7);
    expect(segmentTree.rangeQuery(2, 4))
      .toBe(6);
    expect(segmentTree.rangeQuery(4, 5))
      .toBe(3);
    expect(segmentTree.rangeQuery(3, 3))
      .toBe(0);
  });
});
