import { Stack } from '../stack';

export function calPoints(options: Array<string | number>): number {
  const stack = new Stack<number>();
  options.forEach((value) => {
    if (typeof value === 'number') {
      stack.push(value);
    } else if (value === 'C') {
      stack.pop();
    } else if (value === 'D') {
      const last = stack.pop();
      stack.push(last);
      stack.push(last * 2);
    } else if (value === '+') {
      const last = stack.pop();
      const lastSecond = stack.pop();
      stack.push(lastSecond);
      stack.push(last);
      stack.push(last + lastSecond);
    }
  });

  let result = 0;
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}
