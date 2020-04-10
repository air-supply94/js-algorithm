import { Stack } from '../stack';

export function backspaceCompare(str1: string, str2: string): boolean {
  function getString(str: string): string {
    const stack = new Stack<string>();
    for (const item of str) {
      item === '#' ? stack.pop() : stack.push(item);
    }

    return stack.toArray()
    .join('');
  }

  return getString(str1) === getString(str2);
}
