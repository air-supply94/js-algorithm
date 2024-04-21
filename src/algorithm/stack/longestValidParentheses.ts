// https://leetcode-cn.com/problems/longest-valid-parentheses/
// 32
// top100
export function longestValidParentheses(s: string): number {
  const stack: number[] = [];
  const match: number[] = Array(s.length).fill(0);

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
  let i = 0;
  while (i < match.length) {
    if (match[i] === 1) {
      let j = i;
      while (j < match.length && match[j] === 1) {
        j++;
      }
      result = Math.max(result, j - i);
      i = j;
    } else {
      i++;
    }
  }

  return result;
}

// https://leetcode-cn.com/problems/longest-valid-parentheses/
// 32
export function longestValidParenthesesDp(s: string): number {
  const dp = Array(s.length).fill(0);
  let max = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] += 2;
        dp[i] += i - 2 >= 0 ? dp[i - 2] : 0;
      } else {
        if (dp[i - 1] > 0 && i - 1 - dp[i - 1] >= 0 && s[i - 1 - dp[i - 1]] === '(') {
          dp[i] = dp[i - 1] + 2;
          dp[i] += i - 2 - dp[i - 1] >= 0 ? dp[i - dp[i - 2 - 1]] : 0;
        }
      }

      max = Math.max(max, dp[i]);
    }
  }

  return max;
}
