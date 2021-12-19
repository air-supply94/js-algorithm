// https://leetcode-cn.com/problems/combinations/submissions/
// 77
export function combine(n: number, m: number): number[][] {
  const choice = Array(n)
    .fill(null);
  for (let i = 1; i <= n; i++) {
    choice[i - 1] = i;
  }

  const result: number[][] = [];

  function dfs(choice: number[], path: number[]): void {
    if (path.length === m) {
      result.push(path.slice());
      return;
    }

    for (let i = 0; i < choice.length; i++) {
      path.push(choice[i]);
      dfs(choice.slice(i + 1), path);
      path.pop();
    }
  }

  dfs(choice, []);
  return result;
}
