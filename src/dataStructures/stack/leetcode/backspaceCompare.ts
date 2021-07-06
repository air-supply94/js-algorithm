import { Stack } from '../stack';

export function backspaceCompare(str1: string, str2: string): boolean {
  function getString(str: string): string {
    const stack = new Stack<string>();
    for (const item of str) {
      item === '#' ? stack.pop() : stack.push(item);
    }

    let result = '';
    while (!stack.isEmpty()) {
      result = `${stack.pop()}${result}`;
    }
    return result;
  }

  return getString(str1) === getString(str2);
}
