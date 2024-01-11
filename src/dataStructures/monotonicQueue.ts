import type { interfaces } from '../types';

class MonotonicQueue implements interfaces.MonotonicQueue {
  private readonly queue: number[] = [];

  public push(x: number): void {
    while (this.queue.length > 0 && this.queue[this.queue.length - 1] < x) {
      this.queue.pop();
    }
    this.queue.push(x);
  }

  public pop(x: number): void {
    if (this.queue[0] === x) {
      this.queue.shift();
    }
  }

  public max(): number {
    return this.queue[0];
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
