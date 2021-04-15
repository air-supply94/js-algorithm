import { rubberHouseEasy } from './rubberHouseEasy';

export function rubberHouseMedium(numbers: number[]): number {
  return Math.max(
    rubberHouseEasy(numbers, 0, numbers.length - 2),
    rubberHouseEasy(numbers, 1, numbers.length - 1)
  );
}
