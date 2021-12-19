// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 209
export function minSubArrayLen(target: number, nums: number[]): number {
  const maxValue = Math.max.apply(null, nums);
  const prefixSum = Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  if (target <= maxValue) {
    return 1;
  }

  if (target > prefixSum[prefixSum.length - 1]) {
    return 0;
  }

  let minLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const targetSum = prefixSum[i] + target;

    let left = i + 1;
    let right = nums.length;
    let middle: number = null;
    while (left <= right) {
      middle = left + Math.floor((right - left) / 2);
      if (prefixSum[middle] < targetSum) {
        left = middle + 1;
      } else {
        right = middle === left ? middle - 1 : middle;
      }
    }

    if (left <= nums.length && prefixSum[left] >= targetSum) {
      minLength = Math.min(minLength, left - i);
    }
  }
  return minLength;
}
