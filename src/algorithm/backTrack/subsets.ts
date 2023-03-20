// https://leetcode-cn.com/problems/subsets/
// 78
export function subsets(nums: number[], start = 0, path: number[] = [], result: number[][] = []): number[][] {
  result.push(path.slice());

  for (let i = start; i < nums.length; i++) {
    // 元素可重不可复选
    // if (i > start && nums[i] == nums[i - 1]) {
    //   continue;
    // }

    path.push(nums[i]);
    subsets(nums, i + 1, path, result);
    path.pop();
  }

  return result;
}
