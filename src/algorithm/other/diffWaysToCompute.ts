// https://leetcode-cn.com/problems/different-ways-to-add-parentheses/
// 241
export function diffWaysToCompute(expression: string): number[] {
  if (expression.length === 0) {
    return [];
  }

  if (/^[0-9]+$/.test(expression)) {
    return [Number(expression)];
  }

  const result: number[] = [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
      const left = diffWaysToCompute(expression.slice(0, i));
      const right = diffWaysToCompute(expression.slice(i + 1));
      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          if (expression[i] === '+') {
            result.push(left[j] + right[k]);
          } else if (expression[i] === '-') {
            result.push(left[j] - right[k]);
          } else {
            result.push(left[j] * right[k]);
          }
        }
      }
    }
  }

  return result;
}
