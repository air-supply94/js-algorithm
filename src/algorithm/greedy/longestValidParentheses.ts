// https://leetcode-cn.com/problems/longest-valid-parentheses/
// 32
export function longestValidParentheses(s: string): number {
  let result = 0;
  let leftBrace = 0;
  let rightBrace = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftBrace++;
    } else {
      rightBrace++;
    }

    if (leftBrace === rightBrace) {
      result = Math.max(result, leftBrace + rightBrace);
    } else if (rightBrace > leftBrace) {
      leftBrace = 0;
      rightBrace = 0;
    }
  }

  leftBrace = 0;
  rightBrace = 0;

  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === '(') {
      leftBrace++;
    } else {
      rightBrace++;
    }

    if (leftBrace === rightBrace) {
      result = Math.max(result, leftBrace + rightBrace);
    } else if (leftBrace > rightBrace) {
      leftBrace = 0;
      rightBrace = 0;
    }
  }

  return result;
}
