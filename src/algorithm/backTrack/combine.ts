// https://leetcode-cn.com/problems/combinations/submissions/
// 77
export function combine(n: number, m: number): number[][] {
  const choice: number[] = Array(n).fill(null);
  for (let i = 1; i <= n; i++) {
    choice[i - 1] = i;
  }

  return dfs([], choice, [], 0, m);
}

function dfs(result: number[][], choice: number[], path: number[], start: number, m: number): number[][] {
  if (path.length === m) {
    result.push(path.slice());
    return result;
  }

  for (let i = start; i < choice.length; i++) {
    path.push(choice[i]);
    dfs(result, choice, path, i + 1, m);
    path.pop();
  }

  return result;
}
