import { Stack } from '../index';
import {
  add,
  divide,
  multiply,
  subtract,
} from '../../../utils';

export const symbolStrategy = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

export function postfix(array: ('+' | '-' | '*' | '/' | number)[]): number | null {
  const stack = new Stack<number>();
  let result: number | null = null;
  array.forEach(item => {
    if (typeof item === 'number') {
      stack.push(item);
    } else if (typeof item === 'string') {
      result = symbolStrategy[item](stack.pop(), stack.pop());
      stack.push(result);
    }
  });

  return result;
}
