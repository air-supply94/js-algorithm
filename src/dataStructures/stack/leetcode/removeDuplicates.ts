import { Stack } from '../index';

export function removeDuplicates(str: string): string {
  const stack = new Stack<string>();

  for (const item of str) {
    item === stack.peek() ? stack.pop() : stack.push(item);
  }

  return stack.toArray()
  .reverse()
  .join('');
}
