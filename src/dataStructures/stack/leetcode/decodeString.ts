import { Stack } from '../stack';

export function decodeString(str: string): string {
  const stack = new Stack<string>();
  for (const item of str) {
    if (item === ']') {
      let tmpString = '';
      let popString = stack.pop();
      while (!stack.isEmpty() && popString !== '[') {
        tmpString = `${popString}${tmpString}`;
        popString = stack.pop();
      }

      const repeatCount = stack.pop();
      if (/\d/.test(repeatCount)) {
        tmpString = tmpString.repeat(parseInt(repeatCount, 10));
        for (const item of tmpString) {
          stack.push(item);
        }
      } else if (typeof repeatCount === 'string') {
        stack.push(repeatCount);
      }
    } else {
      stack.push(item);
    }
  }

  let result = '';
  while (!stack.isEmpty()) {
    result = `${stack.pop()}${result}`;
  }
  return result;
}
