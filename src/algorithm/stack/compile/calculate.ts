// https://leetcode-cn.com/problems/basic-calculator/
// 224
export function calculate(s: string): number {
  return recursion(Array.from(s).reverse());
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
  let sign = '+';
  let num = 0;

  while (s.length) {
    const c = s.pop();

    if (/\d/.test(c)) {
      num = 10 * num + Number(c);
    }

    if (c === '(') {
      num = recursion(s);
    }

    if ((/\D/.test(c) && c !== ' ') || s.length === 0) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        const tmp = stack.pop() / num;
        stack.push(tmp >= 0 ? Math.floor(tmp) : Math.ceil(tmp));
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
