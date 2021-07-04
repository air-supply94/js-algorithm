import { Heap } from '../simple/heap';

// https://leetcode-cn.com/problems/find-median-from-data-stream/
// 295
export class MedianFinder {
  constructor() {
    this.minHeap = new Heap((a, b) => a <= b);
    this.maxHeap = new Heap((a, b) => a >= b);
  }

  private readonly minHeap: Heap;

  private readonly maxHeap: Heap;

  public addNum(num: number): void {
    if (this.maxHeap.size >= this.minHeap.size) {
      this.maxHeap.add(num);
      this.minHeap.add(this.maxHeap.poll());
    } else {
      this.minHeap.add(num);
      this.maxHeap.add(this.minHeap.poll());
    }
  }

  public findMedian(): number | undefined {
    if (this.minHeap.size === this.maxHeap.size) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else {
      return this.minHeap.peek();
    }
  }
}
