// https://www.lintcode.com/problem/617/
// 最长区间
export function maxAverage(nums: number[], k: number): number {
  let right = 0;
  let left = 0;
  let sum = 0;
  let maxAvg = 0;

  while (right < nums.length) {
    sum += nums[right];
    right++;

    while (right - left >= k) {
      maxAvg = Math.max(maxAvg, sum / (right - left));
      if (right < nums.length && nums[right] >= maxAvg) {
        sum += nums[right];
        right++;
      } else {
        sum -= nums[left];
        left++;
      }
    }
  }

  return maxAvg;
}
