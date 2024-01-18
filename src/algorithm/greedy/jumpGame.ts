// https://leetcode-cn.com/problems/jump-game/
// 55
// top100
export function canJump(numbers: number[]): boolean {
  let maxDistance = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    maxDistance = Math.max(maxDistance, i + numbers[i]);
    if (maxDistance <= i) {
      return false;
    }
  }

  return maxDistance >= numbers.length - 1;
}

// https://leetcode-cn.com/problems/jump-game-ii/
// 45
// top100
export function jump(numbers: number[]): number {
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

// https://leetcode.cn/problems/partition-labels/description/
// 763
// top100
export function partitionLabels(s: string): number[] {
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const cache: number[] = Array(z - a + 1).fill(null);

  for (let i = 0; i < s.length; i++) {
    cache[s.charCodeAt(i) - a] = i;
  }

  const result: number[] = [];
  let maxDistance = 0;

  let start = 0;
  for (let i = 0; i < s.length; i++) {
    maxDistance = Math.max(maxDistance, cache[s.charCodeAt(i) - a]);
    if (maxDistance === i) {
      result.push(maxDistance - start + 1);
      start = i + 1;
    }
  }
  return result;
}
