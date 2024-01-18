// https://leetcode-cn.com/problems/non-overlapping-intervals/
// 435
export function eraseOverlapIntervals(numbers: number[][]): number {
  numbers.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let currentEnd: number = numbers[0][1];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i][0] >= currentEnd) {
      count++;
      currentEnd = numbers[i][1];
    }
  }

  return numbers.length - count;
}

// https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked
// 56
// top100
export function merge(numbers: number[][]): number[][] {
  numbers.sort((a, b) => a[0] - b[0]);
  let current = numbers[0];
  const result: number[][] = [current];

  for (let i = 1; i < numbers.length; i++) {
    const next = numbers[i];
    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      current = next;
      result.push(current);
    }
  }

  return result;
}
