function swap(data: unknown[], first: number, second: number): void {
  const t = data[first];
  data[first] = data[second];
  data[second] = t;
}

// https://leetcode-cn.com/problems/sort-colors/
// 75
export function sortColors(nums: number[]): void {
  let leftFirst = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === 0) {
      swap(nums, left, leftFirst);
      leftFirst++;
      left++;
    } else if (nums[left] === 1) {
      left++;
    } else {
      swap(nums, left, right);
      right--;
    }
  }
}
