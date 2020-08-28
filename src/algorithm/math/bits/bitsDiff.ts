import { countSetBits } from './countSetBits';

export function bitsDiff(x1: number, x2: number): number {
  return countSetBits(x1 ^ x2);
}
