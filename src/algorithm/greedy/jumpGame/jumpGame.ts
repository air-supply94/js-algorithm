export function jumpGame(numbers: number[]): boolean {
  let k = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i > k) {
      return false;
    }

    k = Math.max(k, i + numbers[i]);
  }
  return true;
}
