import { DoubleLinkedList } from '../../doubleLinkedList';
import { DoubleLinkedListInterface } from '../../doubleLinkedList/types';

class MonotonicQueue {
  constructor() {
    this.doubleLinkedList = new DoubleLinkedList<number>();
  }

  private readonly doubleLinkedList: DoubleLinkedListInterface<number>;

  public push(x: number): void {
    while (!this.doubleLinkedList.isEmpty() && this.doubleLinkedList.tail.value < x) {
      this.doubleLinkedList.deleteTail();
    }
    this.doubleLinkedList.append(x);
  }

  public pop(x: number): void {
    if (this.doubleLinkedList.head.value === x) {
      this.doubleLinkedList.deleteHead();
    }
  }

  public max(): number {
    return this.doubleLinkedList.head.value;
  }
}

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const monotonicQueue = new MonotonicQueue();
  const result: number[] = [];

  for (let i = 0; i < k - 1; i++) {
    monotonicQueue.push(nums[i]);
  }

  for (let i = k - 1; i < nums.length; i++) {
    monotonicQueue.push(nums[i]);
    result.push(monotonicQueue.max());
    monotonicQueue.pop(nums[i - (k - 1)]);
  }

  return result;
}
