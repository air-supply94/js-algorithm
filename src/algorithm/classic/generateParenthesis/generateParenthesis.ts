
export function generateParenthesis(n: number): string[] {
  const result = [];
  function recursion(tempString = '', left = 0, right = 0) {
    if (left === n && right === n) {
      result.push(tempString);
      return;
    }

    if (left < n) {
      recursion(`${tempString}(`, left + 1, right);
    }

    if (left > right && right < n) {
      recursion(`${tempString})`, left, right + 1);
    }
  }

  recursion();

  return result;
}
