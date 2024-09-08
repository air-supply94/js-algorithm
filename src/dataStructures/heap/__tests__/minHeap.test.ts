import { describe, expect, test } from 'vitest';
import { Heap } from '../heap';

describe('MinHeap', () => {
  test('should create an empty min heap', () => {
    const minHeap = new Heap<number>((a, b) => a <= b);
    expect(minHeap).toBeDefined();
    expect(minHeap.peek()).toBeUndefined();
    expect(minHeap.isEmpty()).toBe(true);
  });

  test('down', () => {
    const minHeap = new Heap<number>((a, b) => a <= b);
    minHeap.add(1);
    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(6);
    minHeap.add(8);
    minHeap.add(4);
    minHeap.down(2);
    minHeap.up(2);
    expect(minHeap.heapContainer.toString()).toBe('1,5,3,6,8,4');
  });

  test('should add items to the heap and heapify it up', () => {
    const minHeap = new Heap<number>((a, b) => a <= b);

    minHeap.add(5);
    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.peek()).toBe(5);
    expect(minHeap.heapContainer.toString()).toBe('5');

    minHeap.add(3);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.heapContainer.toString()).toBe('3,5');

    minHeap.add(10);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.heapContainer.toString()).toBe('3,5,10');

    minHeap.add(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.heapContainer.toString()).toBe('1,3,10,5');

    minHeap.add(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.heapContainer.toString()).toBe('1,1,10,5,3');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.heapContainer.toString()).toBe('1,3,10,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.heapContainer.toString()).toBe('3,5,10');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.heapContainer.toString()).toBe('5,10');
  });

  test('should poll items from the heap and heapify it down', () => {
    const minHeap = new Heap<number>((a, b) => a <= b);

    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(1);

    expect(minHeap.heapContainer.toString()).toBe('1,3,10,11,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.heapContainer.toString()).toBe('3,5,10,11');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.heapContainer.toString()).toBe('5,11,10');

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.heapContainer.toString()).toBe('10,11');

    expect(minHeap.poll()).toBe(10);
    expect(minHeap.heapContainer.toString()).toBe('11');

    expect(minHeap.poll()).toBe(11);
    expect(minHeap.heapContainer.toString()).toBe('');

    expect(minHeap.poll()).toBeUndefined();
    expect(minHeap.heapContainer.toString()).toBe('');
  });

  test('should heapify down through the right branch as well', () => {
    const minHeap = new Heap<number>((a, b) => a <= b);

    minHeap.add(3);
    minHeap.add(12);
    minHeap.add(10);

    expect(minHeap.heapContainer.toString()).toBe('3,12,10');

    minHeap.add(11);
    expect(minHeap.heapContainer.toString()).toBe('3,11,10,12');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.heapContainer.toString()).toBe('10,11,12');
  });
});
