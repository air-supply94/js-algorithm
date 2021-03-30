import { divideByTwo } from './divideByTwo';
import { isEven } from './isEven';
import { isPositive } from './isPositive';
import { multiplyByTwo } from './multiplyByTwo';

function multiplyByOddPositive(a: number, b: number): number {
  return multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
}

function multiplyByOddNegative(a: number, b: number): number {
  return multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;
}

function multiplyByEven(a: number, b: number): number {
  return multiply(multiplyByTwo(a), divideByTwo(b));
}

function multiplyByOdd(a: number, b: number): number {
  return isPositive(b) ? multiplyByOddPositive(a, b) : multiplyByOddNegative(a, b);
}

export function multiply(a: number, b: number): number {
  if (b === 0 || a === 0) {
    return 0;
  }

  return isEven(b) ? multiplyByEven(a, b) : multiplyByOdd(a, b);
}
