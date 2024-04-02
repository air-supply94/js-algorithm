// https://leetcode.cn/problems/first-missing-positive/?envType=study-plan-v2&envId=top-100-liked
// 41
// top100
export function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const tmp = nums[i];
      nums[i] = nums[tmp - 1];
      nums[tmp - 1] = tmp;
    }
  }

  for (let i = 0; i < n; ++i) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
