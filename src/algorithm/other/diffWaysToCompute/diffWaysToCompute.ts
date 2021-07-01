export function diffWaysToCompute(expression: string): number[] {
  if (!expression.length) {
    return [];
  }

  const result: number[] = [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
      const left = diffWaysToCompute(expression.substr(0, i));
      const right = diffWaysToCompute(expression.substr(i + 1, expression.length - i - 1));

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

  if (!result.length) {
    result.push(Number(expression));
  }

  return result;
}
