import { divideByTwo } from './divideByTwo';
import { isEven } from './isEven';
import { isPositive } from './isPositive';
import { multiplyByTwo } from './multiplyByTwo';

export function multiply(a: number, b: number): number {
  if (b === 0 || a === 0) {
    return 0;
  }

  function multiplyByOddPositive(): number {
    return multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  }

  function multiplyByOddNegative(): number {
    return multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;
  }

  function multiplyByEven(): number {
    return multiply(multiplyByTwo(a), divideByTwo(b));
  }

  function multiplyByOdd(): number {
    return isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative();
  }

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}
