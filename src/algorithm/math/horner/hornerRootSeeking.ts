import { horner } from './horner';

export function hornerRootSeeking(an: number[], x0: number, x1: number, d: number): number {
  [
    x0,
    x1,
  ] = [
    x0,
    x1,
  ].sort();

  if (horner(an, x0) * horner(an, x1) > 0) {
    return null;
  }

  while (x1 - x0 > d) {
    const middle = (x0 + x1) / 2;
    const middleValue = horner(an, middle);
    if (middleValue === 0) {
      break;
    } else if (middleValue * horner(an, x0) < 0) {
      x1 = middle;
    } else {
      x0 = middle;
    }
  }
  return (x1 + x0) / 2;
}
