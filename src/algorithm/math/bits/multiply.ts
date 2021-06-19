import { divideByTwo } from './divideByTwo';
import { isEven } from './isEven';
import { isPositive } from './isPositive';
import { multiplyByTwo } from './multiplyByTwo';

export function multiply(a: number, b: number): number {
  if (b === 0 || a === 0) {
    return 0;
  }

  if (isEven(b)) {
    return multiply(multiplyByTwo(a), divideByTwo(b));
  }

  if (isPositive(b)) {
    return multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  } else {
    return multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;
  }
}
