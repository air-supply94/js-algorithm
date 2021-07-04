class MonotonicQueue {
  constructor() {
    this.doubleLinkedList = [];
  }

  private readonly doubleLinkedList: number[];

  public push(x: number): void {
    while (this.doubleLinkedList.length && this.doubleLinkedList[this.doubleLinkedList.length - 1] < x) {
      this.doubleLinkedList.pop();
    }
    this.doubleLinkedList.push(x);
  }

  public pop(x: number): void {
    if (this.doubleLinkedList[0] === x) {
      this.doubleLinkedList.shift();
    }
  }

  public max(): number {
    return this.doubleLinkedList[0];
  }
}

// https://leetcode-cn.com/problems/sliding-window-maximum/submissions/
// 239
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
