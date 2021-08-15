function swap(data: unknown[], first: number, second: number): void {
  const t = data[first];
  data[first] = data[second];
  data[second] = t;
}

// https://leetcode-cn.com/problems/sort-colors/
// 75
export function sortColors(nums: number[]): void {
  let l0 = 0;
  let l01 = 0;
  let r = nums.length - 1;
  while (l01 <= r) {
    if (nums[l01] === 0) {
      swap(nums, l01, l0);
      l0++;
      l01++;
    } else if (nums[l01] === 1) {
      l01++;
    } else {
      swap(nums, l01, r);
      r--;
    }
  }
}
