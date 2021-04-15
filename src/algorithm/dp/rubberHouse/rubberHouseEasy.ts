export function rubberHouseEasy(numbers: number[], startIndex = 0, endIndex = numbers.length - 1): number {
  let first = 0;
  let second = 0;
  let current = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    current = Math.max(first + numbers[i], second);
    first = second;
    second = current;
  }

  return current;
}
