import { Heap } from '../index';

// https://leetcode-cn.com/problems/find-median-from-data-stream/
// 295
export class MedianFinder {
  constructor() {
    this.minHeap = new Heap<number>((a, b) => a <= b);
    this.maxHeap = new Heap<number>((a, b) => a >= b);
  }

  private readonly minHeap: Heap<number>;

  private readonly maxHeap: Heap<number>;

  public addNum(num: number): void {
    if (this.maxHeap.heapContainer.length >= this.minHeap.heapContainer.length) {
      this.maxHeap.add(num);
      this.minHeap.add(this.maxHeap.poll());
    } else {
      this.minHeap.add(num);
      this.maxHeap.add(this.minHeap.poll());
    }
  }

  public findMedian(): number | undefined {
    if (this.minHeap.heapContainer.length === this.maxHeap.heapContainer.length) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else {
      return this.minHeap.peek();
    }
  }
}
