import { MaxHeap } from '../maxHeap';
import { MinHeap } from '../minHeap';
import { MaxHeapInterface, MinHeapInterface } from '../types';

export class MedianFinder {
  constructor() {
    this.minHeap = new MinHeap<number>();
    this.maxHeap = new MaxHeap<number>();
  }

  private readonly minHeap: MinHeapInterface<number>;

  private readonly maxHeap: MaxHeapInterface<number>;

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
