// https://leetcode-cn.com/problems/sort-colors/
// 75
export function sortColors(nums: number[]): void {
  let p0 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      const t = nums[p0];
      nums[p0] = nums[i];
      nums[i] = t;
      p0++;
    }
  }

  let p1 = p0;
  for (let i = p1; i < nums.length; i++) {
    if (nums[i] === 1) {
      const t = nums[p1];
      nums[p1] = nums[i];
      nums[i] = t;
      p1++;
    }
  }
}
