// https://leetcode-cn.com/problems/non-overlapping-intervals/
// 435
export function eraseOverlapIntervals(numbers: number[][]): number {
  if (!numbers.length) {
    return 0;
  }

  const newNumbers: number[][] = numbers.slice().sort((a, b) => a[1] - b[1]);
  let count = 1;
  let current = newNumbers[0][1];

  for (let i = 1; i < newNumbers.length; i++) {
    if (newNumbers[i][0] >= current) {
      count++;
      current = newNumbers[i][1];
    }
  }

  return numbers.length - count;
}
