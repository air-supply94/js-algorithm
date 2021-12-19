// https://leetcode-cn.com/problems/generate-parentheses/
// 22
export function generateParenthesis(n: number): string[] {
  return dfs([], '', 0, 0, n);
}

function dfs(result: string[], path: string, left: number, right: number, n: number): string[] {
  if (left === n && right === n) {
    result.push(path);
    return result;
  }

  if (left < n) {
    dfs(result, `${path}(`, left + 1, right, n);
  }

  if (left > right) {
    dfs(result, `${path})`, left, right + 1, n);
  }

  return result;
}
