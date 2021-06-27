export function rubberHouseEasy(numbers: number[], startIndex = 0, endIndex = numbers.length - 1): number {
  let dp_i0 = 0;
  let dp_i1 = 0;
  let dp_i2 = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    dp_i2 = Math.max(dp_i1, dp_i0 + numbers[i]);
    dp_i0 = dp_i1;
    dp_i1 = dp_i2;
  }

  return dp_i2;
}
