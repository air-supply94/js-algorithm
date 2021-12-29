// https://leetcode-cn.com/problems/subsets/
// 78
export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(start: number, path: number[]): void {
    result.push(path.slice());

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);

  return result;
}
