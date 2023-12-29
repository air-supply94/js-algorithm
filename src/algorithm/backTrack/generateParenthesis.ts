// https://leetcode-cn.com/problems/generate-parentheses/
// 22
// top100
export function generateParenthesis(n: number, path = '', left = 0, right = 0, result: string[] = []): string[] {
  if (left === n && right === n) {
    result.push(path);
    return result;
  }

  if (left < n) {
    generateParenthesis(n, `${path}(`, left + 1, right, result);
  }

  if (left > right) {
    generateParenthesis(n, `${path})`, left, right + 1, result);
  }

  return result;
}
