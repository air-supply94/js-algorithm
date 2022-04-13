// https://leetcode-cn.com/problems/longest-valid-parentheses/
// 32
export function longestValidParentheses(s: string): number {
  const stack: number[] = [];
  const match: number[] = Array(s.length)
    .fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        match[i] = 1;
        match[stack.pop()] = 1;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < match.length; i++) {
    if (match[i] === 1) {
      let j = i;
      while (j < match.length && match[j] === 1) {
        j++;
      }
      result = Math.max(result, j - i);
      i = j;
    }
  }

  return result;
}
