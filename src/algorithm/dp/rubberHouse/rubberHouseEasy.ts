export function rubberHouseEasy(numbers: number[], start = 0, end = numbers.length - 1): number {
  let first = 0;
  let second = 0;
  let current = 0;

  for (let i = start; i <= end; i++) {
    current = Math.max(first + numbers[i], second);
    first = second;
    second = current;
  }

  return current;
}
