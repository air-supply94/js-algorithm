// https://leetcode-cn.com/problems/basic-calculator/
// 224
export function calculate(s: string): number {
  return recursion(Array.from(s)
    .filter((item) => item && item !== ' ')
    .reverse());
}

function sum(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

function recursion(s: string[]): number {
  const stack: number[] = [];
  let num = 0;
  let sign = '+';

  while (s.length) {
    const c = s.pop();
    if (/\d/.test(c)) {
      num = num * 10 + (Number(c));
    }

    if (c === '(') {
      num = recursion(s);
    }

    if (/\D/.test(c) || s.length === 0) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(stack.pop() / num | 0);
      }

      if (c === ')') {
        return sum(stack);
      }

      sign = c;
      num = 0;
    }
  }

  return sum(stack);
}
