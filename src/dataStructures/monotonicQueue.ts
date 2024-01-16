
// https://leetcode-cn.com/problems/sliding-window-maximum/submissions/
// 239
// top100
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = [];

  for (let i = 0; i < k; i++) {
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);
  }

  const result: number[] = [nums[queue[0]]];
  for (let i = k; i < nums.length; i++) {
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);

    while (queue[0] <= i - k) {
      queue.shift();
    }
    result.push(nums[queue[0]]);
  }

  return result;
}
