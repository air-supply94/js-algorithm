import { Heap } from '../heap';
import { expect, test, describe } from 'vitest';

describe('MaxHeap', () => {
  test('should create an empty max heap', () => {
    const maxHeap = new Heap<number>((a, b) => a >= b);

    expect(maxHeap)
      .toBeDefined();
    expect(maxHeap.peek())
      .toBeUndefined();
    expect(maxHeap.isEmpty())
      .toBe(true);
  });

  test('should add items to the heap and heapify it up', () => {
    const maxHeap = new Heap<number>((a, b) => a >= b);

    maxHeap.add(5);
    expect(maxHeap.isEmpty())
      .toBe(false);
    expect(maxHeap.peek())
      .toBe(5);
    expect(maxHeap.heapContainer.toString())
      .toBe('5');

    maxHeap.add(3);
    expect(maxHeap.peek())
      .toBe(5);
    expect(maxHeap.heapContainer.toString())
      .toBe('5,3');

    maxHeap.add(10);
    expect(maxHeap.peek())
      .toBe(10);
    expect(maxHeap.heapContainer.toString())
      .toBe('10,3,5');

    maxHeap.add(1);
    expect(maxHeap.peek())
      .toBe(10);
    expect(maxHeap.heapContainer.toString())
      .toBe('10,3,5,1');

    maxHeap.add(1);
    expect(maxHeap.peek())
      .toBe(10);
    expect(maxHeap.heapContainer.toString())
      .toBe('10,3,5,1,1');

    expect(maxHeap.poll())
      .toBe(10);
    expect(maxHeap.heapContainer.toString())
      .toBe('5,3,1,1');

    expect(maxHeap.poll())
      .toBe(5);
    expect(maxHeap.heapContainer.toString())
      .toBe('3,1,1');

    expect(maxHeap.poll())
      .toBe(3);
    expect(maxHeap.heapContainer.toString())
      .toBe('1,1');
  });

  test('should poll items from the heap and heapify it down', () => {
    const maxHeap = new Heap<number>((a, b) => a >= b);

    maxHeap.add(5);
    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(1);

    expect(maxHeap.heapContainer.toString())
      .toBe('11,10,5,3,1');

    expect(maxHeap.poll())
      .toBe(11);
    expect(maxHeap.heapContainer.toString())
      .toBe('10,3,5,1');

    expect(maxHeap.poll())
      .toBe(10);
    expect(maxHeap.heapContainer.toString())
      .toBe('5,3,1');

    expect(maxHeap.poll())
      .toBe(5);
    expect(maxHeap.heapContainer.toString())
      .toBe('3,1');

    expect(maxHeap.poll())
      .toBe(3);
    expect(maxHeap.heapContainer.toString())
      .toBe('1');

    expect(maxHeap.poll())
      .toBe(1);
    expect(maxHeap.heapContainer.toString())
      .toBe('');

    expect(maxHeap.poll())
      .toBeUndefined();
    expect(maxHeap.heapContainer.toString())
      .toBe('');
  });

  test('should heapify down through the right branch as well', () => {
    const maxHeap = new Heap<number>((a, b) => a >= b);

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);

    expect(maxHeap.heapContainer.toString())
      .toBe('12,3,10');

    maxHeap.add(11);
    expect(maxHeap.heapContainer.toString())
      .toBe('12,11,10,3');

    expect(maxHeap.poll())
      .toBe(12);
    expect(maxHeap.heapContainer.toString())
      .toBe('11,3,10');
  });
});
