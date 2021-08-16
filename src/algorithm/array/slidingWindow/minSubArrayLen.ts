// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 209
export function minSubArrayLen(target: number, nums: number[]): number {
  let right = 0;
  let left = 0;
  let length = Infinity;
  let sum = 0;

  while (right < nums.length) {
    sum += nums[right];
    right++;

    while (sum >= target) {
      length = Math.min(right - left, length);
      sum -= nums[left];
      left++;
    }
  }

  return length === Infinity ? 0 : length;
}
