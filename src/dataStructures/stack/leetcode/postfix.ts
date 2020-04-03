import { Stack } from '../index';

export function add(x: number, y: number): number {
  return x + y;
}

export function subtract(x: number, y: number): number {
  return x - y;
}

export function multiply(x: number, y: number): number {
  return x * y;
}

export function divide(x: number, y: number): number {
  return x / y;
}

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
