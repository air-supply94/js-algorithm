// https://leetcode-cn.com/problems/next-greater-element-i/
// 496
export function nextGreaterElement(num1: number[], num2: number[]): number[] {
  const stack: number[] = [];
  const hashMap = new Map<number, number>();

  for (let i = num2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= num2[i]) {
      stack.pop();
    }

    hashMap.set(num2[i], stack.length ? stack[stack.length - 1] : -1);
    stack.push(num2[i]);
  }

  const result: number[] = Array(num1.length)
    .fill(null);
  for (let i = 0; i < num1.length; i++) {
    result[i] = hashMap.get(num1[i]);
  }
  return result;
}

// https://leetcode-cn.com/problems/next-greater-element-ii/submissions/
// 503
export function nextGreaterElements(num: number[]): number[] {
  const stack: number[] = [];
  const len = num.length;
  const result: number[] = Array(num.length)
    .fill(null);

  for (let i = 2 * len - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= num[i % len]) {
      stack.pop();
    }

    result[i % len] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(num[i % len]);
  }

  return result;
}
