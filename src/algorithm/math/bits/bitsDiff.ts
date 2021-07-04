import { hammingWeight } from './hammingWeight';

export function bitsDiff(x1: number, x2: number): number {
  return hammingWeight(x1 ^ x2);
}
