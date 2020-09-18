import { Comparator } from '../../../utils';
import { MaxHeap } from '../maxHeap';

describe('MaxHeap', () => {
  test('should create an empty max heap', () => {
    const maxHeap = new MaxHeap();

    expect(maxHeap)
      .toBeDefined();
    expect(maxHeap.peek())
      .toBeUndefined();
    expect(maxHeap.isEmpty())
      .toBe(true);
  });

  test('should create min heap from array', () => {
    const maxHeap = new MaxHeap();
    maxHeap.fromArray([
      5,
      3,
      10,
      11,
      1,
    ]);
    expect(maxHeap.toString())
      .toBe('11,10,5,3,1');
  });

  test('should add items to the heap and heapify it up', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    expect(maxHeap.isEmpty())
      .toBe(false);
    expect(maxHeap.peek())
      .toBe(5);
    expect(maxHeap.toString())
      .toBe('5');

    maxHeap.add(3);
    expect(maxHeap.peek())
      .toBe(5);
    expect(maxHeap.toString())
      .toBe('5,3');

    maxHeap.add(10);
    expect(maxHeap.peek())
      .toBe(10);
    expect(maxHeap.toString())
      .toBe('10,3,5');

    maxHeap.add(1);
    expect(maxHeap.peek())
      .toBe(10);
    expect(maxHeap.toString())
      .toBe('10,3,5,1');

    maxHeap.add(1);
    expect(maxHeap.peek())
      .toBe(10);
    expect(maxHeap.toString())
      .toBe('10,3,5,1,1');

    expect(maxHeap.poll())
      .toBe(10);
    expect(maxHeap.toString())
      .toBe('5,3,1,1');

    expect(maxHeap.poll())
      .toBe(5);
    expect(maxHeap.toString())
      .toBe('3,1,1');

    expect(maxHeap.poll())
      .toBe(3);
    expect(maxHeap.toString())
      .toBe('1,1');
  });

  test('should poll items from the heap and heapify it down', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(1);

    expect(maxHeap.toString())
      .toBe('11,10,5,3,1');

    expect(maxHeap.poll())
      .toBe(11);
    expect(maxHeap.toString())
      .toBe('10,3,5,1');

    expect(maxHeap.poll())
      .toBe(10);
    expect(maxHeap.toString())
      .toBe('5,3,1');

    expect(maxHeap.poll())
      .toBe(5);
    expect(maxHeap.toString())
      .toBe('3,1');

    expect(maxHeap.poll())
      .toBe(3);
    expect(maxHeap.toString())
      .toBe('1');

    expect(maxHeap.poll())
      .toBe(1);
    expect(maxHeap.toString())
      .toBe('');

    expect(maxHeap.poll())
      .toBeUndefined();
    expect(maxHeap.toString())
      .toBe('');
  });

  test('should heapify down through the right branch as well', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);

    expect(maxHeap.toString())
      .toBe('12,3,10');

    maxHeap.add(11);
    expect(maxHeap.toString())
      .toBe('12,11,10,3');

    expect(maxHeap.poll())
      .toBe(12);
    expect(maxHeap.toString())
      .toBe('11,3,10');
  });

  test('should be possible to find item indices in heap', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString())
      .toBe('12,11,10,3,11');

    expect(maxHeap.findIndex(5))
      .toBe(-1);
    expect(maxHeap.findIndex(12))
      .toBe(0);
    expect(maxHeap.findIndex(11))
      .toBe(1);
  });

  test('should be possible to remove items from heap with heapify down', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.remove(100))
      .toEqual([]);

    expect(maxHeap.toString())
      .toBe('12,11,10,3,11');

    maxHeap.removeAll(12);
    expect(maxHeap.toString())
      .toEqual('11,11,10,3');

    maxHeap.removeAll(12);
    expect(maxHeap.peek())
      .toEqual(11);

    maxHeap.removeAll(11);
    expect(maxHeap.toString())
      .toEqual('10,3');

    maxHeap.removeAll(10);
    expect(maxHeap.peek())
      .toEqual(3);
  });

  test('should be possible to remove items from heap with heapify up', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(5);
    maxHeap.add(6);
    maxHeap.add(7);
    maxHeap.add(4);
    maxHeap.add(6);
    maxHeap.add(8);
    maxHeap.add(2);
    maxHeap.add(1);

    expect(maxHeap.toString())
      .toBe('10,8,6,7,6,4,5,3,2,1');

    maxHeap.removeAll(4);
    expect(maxHeap.toString())
      .toEqual('10,8,6,7,6,1,5,3,2');

    maxHeap.removeAll(3);
    expect(maxHeap.toString())
      .toEqual('10,8,6,7,6,1,5,2');

    maxHeap.removeAll(5);
    expect(maxHeap.toString())
      .toEqual('10,8,6,7,6,1,2');

    maxHeap.removeAll(10);
    expect(maxHeap.toString())
      .toEqual('8,7,6,2,6,1');

    maxHeap.removeAll(6);
    expect(maxHeap.toString())
      .toEqual('8,7,1,2');

    maxHeap.removeAll(2);
    expect(maxHeap.toString())
      .toEqual('8,7,1');

    maxHeap.removeAll(1);
    expect(maxHeap.toString())
      .toEqual('8,7');

    maxHeap.removeAll(7);
    expect(maxHeap.toString())
      .toEqual('8');

    maxHeap.removeAll(8);
    expect(maxHeap.toString())
      .toEqual('');
  });

  test('should be possible to remove items from heap with custom finding comparator', () => {
    const maxHeap = new MaxHeap();
    maxHeap.add('a');
    maxHeap.add('bb');
    maxHeap.add('ccc');
    maxHeap.add('dddd');

    expect(maxHeap.toString())
      .toBe('dddd,ccc,bb,a');

    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    maxHeap.removeAll('hey', comparator);
    expect(maxHeap.toString())
      .toBe('dddd,a,bb');
  });
});
