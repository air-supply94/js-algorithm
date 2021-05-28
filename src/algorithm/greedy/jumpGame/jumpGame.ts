export function jumpGame(numbers: number[]): boolean {
  let maxDistance = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    maxDistance = Math.max(maxDistance, i + numbers[i]);
    if (maxDistance <= i) {
      return false;
    }
  }

  return maxDistance >= numbers.length - 1;
}

export function jumpGameFast(numbers: number[]): number {
  let end = 0;
  let maxDistance = 0;
  let count = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    maxDistance = Math.max(maxDistance, i + numbers[i]);
    if (i === end) {
      count++;
      end = maxDistance;
    }
  }

  return count;
}
