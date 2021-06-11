import { Stack } from '../../stack';

export function nextGreaterElement(num1: number[], num2: number[]): number[] {
  const stack = new Stack<number>();
  const hashMap = new Map<number, number>();

  for (let i = num2.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= num2[i]) {
      stack.pop();
    }

    hashMap.set(num2[i], stack.isEmpty() ? -1 : stack.peek());
    stack.push(num2[i]);
  }

  const result: number[] = Array(num1.length)
    .fill(null);
  for (let i = 0; i < num1.length; i++) {
    result[i] = hashMap.get(num1[i]);
  }
  return result;
}

export function nextGreaterElementCircle(num: number[]): number[] {
  const stack = new Stack<number>();
  const len = num.length;
  const result: number[] = Array(num.length)
    .fill(null);

  for (let i = 2 * len - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= num[i % len]) {
      stack.pop();
    }

    result[i % len] = stack.isEmpty() ? -1 : stack.peek();
    stack.push(num[i % len]);
  }

  return result;
}
