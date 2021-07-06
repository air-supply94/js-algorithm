import { Stack } from '../stack';

export function removeDuplicates(str: string): string {
  const stack = new Stack<string>();

  for (const item of str) {
    if (stack.isEmpty()) {
      stack.push(item);
    } else {
      if (stack.peek() === item) {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
  }

  let result = '';
  while (!stack.isEmpty()) {
    result = `${stack.pop()}${result}`;
  }
  return result;
}
