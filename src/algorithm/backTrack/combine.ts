// https://leetcode-cn.com/problems/combinations/submissions/
// 77
export function combine(n: number, m: number): number[][] {
  const choice = Array(n).fill(null);
  for (let i = 1; i <= n; i++) {
    choice[i - 1] = i;
  }

  const result: number[][] = [];

  function dfs(start: number, path: number[]): void {
    if (path.length === m) {
      result.push(path.slice());
      return;
    }

    for (let i = start; i < choice.length; i++) {
      path.push(choice[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);
  return result;
}
