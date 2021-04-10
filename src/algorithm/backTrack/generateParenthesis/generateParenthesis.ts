export function generateParenthesis(n: number): string[] {
  return recursion([], '', 0, 0, n);
}

function recursion(result: string[], path: string, left: number, right: number, n: number): string[] {
  if (left === n && right === n) {
    result.push(path);
    return result;
  }

  if (left < n) {
    recursion(result, `${path}(`, left + 1, right, n);
  }

  if (left > right) {
    recursion(result, `${path})`, left, right + 1, n);
  }

  return result;
}
