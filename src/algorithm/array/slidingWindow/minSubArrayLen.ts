// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 209
// 最短区间
export function minSubArrayLen(target: number, nums: number[]): number {
  let right = 0;
  let left = 0;
  let length = Number.POSITIVE_INFINITY;
  let sum = 0;

  while (right < nums.length) {
    const rightValue = nums[right];
    right++;
    sum += rightValue;

    while (sum >= target) {
      length = Math.min(right - left, length);

      const leftValue = nums[left];
      left++;
      sum -= leftValue;
    }
  }

  return length === Number.POSITIVE_INFINITY ? 0 : length;
}
