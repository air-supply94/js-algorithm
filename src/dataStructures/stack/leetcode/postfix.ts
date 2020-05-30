import { add, divide, multiply, subtract } from '../../../utils';
import { Stack } from '../stack';

export const symbolStrategy = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

export function postfix(array: Array<'+' | '-' | '*' | '/' | number>): number | null {
  const stack = new Stack<number>();
  let result: number | null = null;
  array.forEach((item) => {
    if (typeof item === 'number') {
      stack.push(item);
    } else if (typeof item === 'string') {
      result = symbolStrategy[item](stack.pop(), stack.pop());
      stack.push(result);
    }
  });

  return result;
}
