import { getBit } from './getBit';

export function isPositive(x: number): boolean {
  if (x === 0) {
    return false;
  }

  return getBit(x, 31) === 0;
}
